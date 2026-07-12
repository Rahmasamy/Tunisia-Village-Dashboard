import { IsEmail, IsEnum, IsObject, IsOptional, IsString, Length, Matches, ValidateNested } from "class-validator";
import { SystemRole } from "../../user/entity/enum.js";
import  { CreateServiceDTO } from "../../services/dto/service.dto.js";
import { Type } from "class-transformer";

export class RegisterDTO {
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;

  @Length(9, 15, {
    message: "Phone number must be between 9 and 15 characters",
  })
  phone!: string;
  @IsString()
  @Length(2, 50, { message: "Name must be between 2 and 50 characters" })
  name!: string;
  @IsString()
  @Length(8, 50, { message: "Password must be between 8 and 50 characters" })
  @Matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{10,50}$/,
  {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  }
)
  password!: string;

   @IsString()
  @Length(8, 50, { message: "Password must be between 8 and 50 characters" })
 @Matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{10,50}$/,
  {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  }
)
  confirmPassword!: string;
 
  @IsEnum(SystemRole, { message: "Invalid system role" })
  SystemRole!:SystemRole;
}

export class LoginDTO {
    @IsEmail({}, { message: "Invalid email address" })
    email!: string;

    @IsString()
    @Length(8, 50, { message: "Password must be between 8 and 50 characters" })
    password!: string;
}

export class ForgetPaaaswordDTO {
    @IsEmail()
    email!:string;
}

export class ResetPasswordDTO {
 @IsEmail()
  email!:string;

  @IsString()
 
  otp!: string;

    @Length(8, 50, { message: "Password must be between 8 and 50 characters" })
  newPassword!: string;


}

export class RefreshTokenDTO {
    @IsString()
    refreshToken!: string;
}

export class UploadCardDTO {
    @IsString()
    userId!: string;
}

export class VerifyOtpDTO {
    @IsEmail()
    email!: string;

    @IsString()
    otp!: string;
}