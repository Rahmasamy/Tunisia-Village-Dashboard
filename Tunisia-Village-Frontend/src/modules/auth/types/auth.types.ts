export interface RegisterDTO {
  email: string;
  phone: string;
  name: string;
  password: string;
  confirmPassword: string;
  SystemRole: 'user' | 'ambassedor' | 'service_provider' | 'system_admin';
  service?: CreateServiceDTO;
}

export interface CreateServiceDTO {
  name: string;
  description?: string;
  userId?: number;
  isActive?: boolean;
}

export interface LoginDTO {
  email: string;
  password?: string; // Kept optional for backward compatibility in components, though backend requires it
}

export interface ForgetPasswordDTO {
  email: string;
}

export interface VerifyOtpDTO {
  email: string;
  otp: string;
}

export interface ResetPasswordDTO {
  email: string;
  otp: string;
  newPassword: string;
}

export interface GoogleLoginDTO {
  code: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthResponse {
  success?: boolean;
  user?: User;
  accessToken?: string;
  // Based on Node.js conventions, it might also return a token or message directly.
}
