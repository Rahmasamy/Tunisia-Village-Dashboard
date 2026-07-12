import { SystemRole } from "../../user/entity/enum.js";
import {
  createUserIfNotExists,
  findIfUserExists,
  selectUserByEmail,
} from "../../user/repo/user.repo.js";
import type {
  ForgetPaaaswordDTO,
  LoginDTO,
  RegisterDTO,
  ResetPasswordDTO,
  VerifyOtpDTO,
} from "../dto/auth.dto.js";
import { GoogleLoginDTO } from "../dto/social-login.dto.js";
import { googleService, GoogleService } from "./google.service.js";
import {
  InvalidCredentialsError,
  InvalidOTPError,
  NoUserFounderror,
  PasswordsDoNotMatchError,
  unAuthorizedRegisterationError,
  UserAlreadyExistsError,
} from "../error.js";
import {
  comparePassword,
  generateRefreshToken,
  generateToken,
  hashPassword,
  verifyOTP,
} from "../utils.js";
import {
  consumePasswordReset,
  createPasswordReset,
  findPasswordResetByUserId,
  updatePassword,
} from "../repo/auth.repo.js";
import jwt from "jsonwebtoken";
import { env } from "../../../common/config/env.config.js";
import { db } from "../../../common/db/index.js";
import { serviceService, ServiceService } from "../../services/service/service.service.js";
import { genrateMembershipCertificate } from "./generatePdf.service.js";

export class AuthService {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly googleService: GoogleService
  ) { }
  register = async (data: RegisterDTO) => {
    // check if user exists
    if (data.SystemRole === SystemRole.SYSTEM_ADMIN) {
      throw unAuthorizedRegisterationError;
    }
    if (data.password !== data.confirmPassword) {
      throw PasswordsDoNotMatchError;
    }
    const userExists = await findIfUserExists(data.email, data.phone);
    if (userExists) {
      throw UserAlreadyExistsError;
    }
    // hash password
    const hashedPassword = await hashPassword(data.password);
    const now = new Date();

    // execute database operations in a transaction
    const user = await db.transaction(async (tx) => {
      // create user
      const createdUser = await createUserIfNotExists({
        email: data.email,
        phone: data.phone,
        name: data.name,
        password_hash: hashedPassword,
        system_role: data.SystemRole,
        created_at: now,
        updated_at: now,
      }, tx);

      return createdUser;
    });

    // membership number is generated and saved automatically inside createUserIfNotExists

    // generate token and refresh token
    const tokenPayload = {
      userId: user.id,
      SystemRole: user.system_role,
      email: user.email,
    };
    const token = generateToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    return {
      token,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        name: user.name,
        system_role: user.system_role,
        membership_number: user.membership_number,
      },
    };
  };
  login = async (data: LoginDTO) => {
    // check if user exists
    const user = await selectUserByEmail(data.email);
    if (!user) {
      throw NoUserFounderror;
    }
    // verify password
    if (!user.password_hash) {
      throw InvalidCredentialsError;
    }
    const isMatch = await comparePassword(data.password, user.password_hash);
    if (!isMatch) {
      throw InvalidCredentialsError;
    }
    // generate token and refresh token
    const tokenPayload = {
      userId: user.id,
      SystemRole: user.system_role,
      email: user.email,
    };
    const token = generateToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    return {
      token,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        name: user.name,
        system_role: user.system_role,
        membership_number: user.membership_number,
      },
    };
  };
  forgetPassword = async (data: ForgetPaaaswordDTO) => {
    const user = await selectUserByEmail(data.email);
    if (!user) {
      return;
    }
    // Create password reset record and generate OTP
    const { otp } = await createPasswordReset(user.id);

    console.log(`email mocked sended successfully! ${otp}`);
  };
  
  verifyOtp = async (data: VerifyOtpDTO) => {
    // find user by email
    const user = await selectUserByEmail(data.email);
    if (!user) {
      throw InvalidOTPError;
    }
    // find password reset record by user id
    const passwordReset = await findPasswordResetByUserId(user.id);
    if (!passwordReset || passwordReset.isExpired()) {
      throw InvalidOTPError;
    }
    // verify otp
    const isValidOTP = await verifyOTP(data.otp, passwordReset.otp_hash);
    if (!isValidOTP) {
      throw InvalidOTPError;
    }
    // We do NOT consume the OTP here. It will be consumed when they actually submit the new password.
  };
  
  resetPassword = async (data: ResetPasswordDTO) => {
    // find user by email
    const user = await selectUserByEmail(data.email);
    if (!user) {
      throw InvalidOTPError;
    }
    // find password reset record by user id
    const passwordReset = await findPasswordResetByUserId(user.id);
    if (!passwordReset || passwordReset.isExpired()) {
      throw InvalidOTPError;
    }
    // verify otp
    const isValidOTP = await verifyOTP(data.otp, passwordReset.otp_hash);
    if (!isValidOTP) {
      throw InvalidOTPError;
    }
    // consume password reset code
    await consumePasswordReset(passwordReset.id);

    // hash new password
    const hashedPassword = await hashPassword(data.newPassword);

    // update user password
    await updatePassword(user.id, hashedPassword);

    // update password reset consumed at
    await consumePasswordReset(passwordReset.id);
  };

  refreshAccessToken = async (refreshToken: string) => {
    // Verify refresh token
    if (!refreshToken) {
      throw InvalidCredentialsError;
    }
    const decoded = jwt.verify(
      refreshToken,
      env.auth.refreshTokenSecret,
    ) as jwt.JwtPayload;

    // Generate new access token
    const tokenPayload = {
      userId: decoded.userId,
      SystemRole: decoded.SystemRole,
      email: decoded.email,
    };
    const newAccessToken = generateToken(tokenPayload);

    return {
      token: newAccessToken,
    };
  };

  googleLogin = async (data: GoogleLoginDTO) => {
    // Verify Google Authorization Code
    const payload = await this.googleService.verifyAuthorizationCode(data.code);

    // Find or create user
    let user = await selectUserByEmail(payload.email);
    if (!user) {
      const now = new Date();
      user = await createUserIfNotExists({
        email: payload.email,
        name: payload.name,
        phone: null,
        password_hash: null,
        system_role: SystemRole.USER,
        created_at: now,
        updated_at: now,
      });
    }

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      SystemRole: user.system_role,
      email: user.email,
    };
    const token = generateToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    return {
      token,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        name: user.name,
        system_role: user.system_role,
      },
    };
  };
}

export const authService = new AuthService(serviceService, googleService);
