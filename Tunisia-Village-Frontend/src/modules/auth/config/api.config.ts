export const authApiConfig = {
  endpoints: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    forgotPassword: '/api/auth/forgot-password',
    verifyOtp: '/api/auth/verify-otp',
    resetPassword: '/api/auth/reset-password',
    google: '/api/auth/google',
    getCard: (userId: string | number) => `/api/auth/card/` + userId,
    uploadCard: (userId: string | number) => `/api/auth/upload-card/` + userId,
  }
};
