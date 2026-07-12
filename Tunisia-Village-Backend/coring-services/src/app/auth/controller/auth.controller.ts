import type { NextFunction, Request, Response } from "express";
import { authService, AuthService } from "../service/auth.service.js";
import { validateBody } from "../../../common/validation/validate.js";
import { ForgetPaaaswordDTO, LoginDTO, RefreshTokenDTO, RegisterDTO, ResetPasswordDTO, UploadCardDTO, VerifyOtpDTO } from "../dto/auth.dto.js";
import { GoogleLoginDTO } from "../dto/social-login.dto.js";
import { clearAuthCookies, setAccessTokenCookie, setRefreshTokenCookie } from "../utils.js";
import { genrateMembershipCertificate, generateMembershipCertificateBuffer } from "../service/generatePdf.service.js";
import path from "path";
import { uploadPdfBuffer } from "../service/cloudinary.service.js";
import { updateUserCertificates } from "../../user/repo/user.repo.js";

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await validateBody(RegisterDTO, req.body);
      const result = await this.authService.register(data);
      res.status(201).json(result);
    } catch (error) {
      return next(error);
    }
  };
    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // validate body
            const data = await validateBody(LoginDTO, req.body);
            const result = await this.authService.login(data);
            setAccessTokenCookie(res, result.token);
            setRefreshTokenCookie(res, result.refreshToken);
            res.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    }
    logout = async (req: Request, res: Response, next: NextFunction) => {
        try {
            clearAuthCookies(res);
            res.status(200).json({ message: "Logged out successfully" });
        } catch (error) {
            return next(error);
        }
    }
    forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
     try {
        // validate body    
        const data = await validateBody(ForgetPaaaswordDTO, req.body);
        const result = await this.authService.forgetPassword(data);
        res.status(200).json({
            "message ": "Email has been sent successfully!"
        });
        } catch (error) {   
            return next(error);
        }
    }
    verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // validate body
            const data = await validateBody(VerifyOtpDTO, req.body);
            await this.authService.verifyOtp(data);
            res.status(200).json({
                message: "OTP is valid!"
            });
        }
        catch (error) {
            return next(error);
        }
    }
    resetPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // validate body
            const data = await validateBody(ResetPasswordDTO, req.body);
            await this.authService.resetPassword(data);
            res.status(200).json({
                "message ": "Password has been reset successfully!"
            });
        }
        catch (error) {
            return next(error);
        }
      }

    refreshToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const refreshToken = req.cookies["refresh_token"] || req.body?.refreshToken;
            const data = await validateBody(RefreshTokenDTO, { refreshToken });
            const result = await this.authService.refreshAccessToken(data.refreshToken);
            setAccessTokenCookie(res, result.token);
            res.status(200).json({
                message: "success"
            });
        } catch (error) {
            return next(error);
        }
    }

    googleLogin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await validateBody(GoogleLoginDTO, req.body);
            const result = await this.authService.googleLogin(data);
            setAccessTokenCookie(res, result.token);
            setRefreshTokenCookie(res, result.refreshToken);
            res.status(200).json(result);
        } catch (error) {
            return next(error);
        }
    }

    generateCard = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = BigInt(req.params.userId as string);
            const fileName = await genrateMembershipCertificate(userId);
            
            // Provide a short delay to ensure the file stream has finished writing
            setTimeout(() => {
                res.download(path.resolve(process.cwd(), fileName));
            }, 500);
        } catch (error) {
            return next(error);
        }
    }

    uploadCard = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await validateBody(UploadCardDTO, { userId: req.params.userId });
            const parsedUserId = BigInt(data.userId);
            
            const buffer = await generateMembershipCertificateBuffer(parsedUserId);
            const publicId = `membership_card_${parsedUserId}_${Date.now()}`;
            
            // Upload to Cloudinary to get the PNG image URL
            const imageUrl = await uploadPdfBuffer(buffer, publicId);
            
            // Generate the PDF URL pointing to our own backend endpoint to bypass Cloudinary's 401 error!
            const baseUrl = req.protocol + '://' + req.get('host');
            const pdfUrl = `${baseUrl}/api/auth/card/${parsedUserId}`;

            // Save the URLs to the database
            await updateUserCertificates(parsedUserId, pdfUrl, imageUrl);

            res.status(200).json({ pdfUrl, imageUrl });
        } catch (error) {
            return next(error);
        }
    }
}

export const authController = new AuthController(authService)