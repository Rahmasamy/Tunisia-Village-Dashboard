import { Router } from "express";
import { authController } from "../controller/auth.controller.js";

export const authRoute = Router();
authRoute.post("/register",authController.register)
authRoute.post("/login",authController.login)
authRoute.post("/logout",authController.logout)
authRoute.post("/forgot-password",authController.forgetPassword)
authRoute.post("/verify-otp",authController.verifyOtp)
authRoute.post("/reset-password",authController.resetPassword)
authRoute.post("/refresh",authController.refreshToken)
authRoute.post("/google",authController.googleLogin)
authRoute.get("/card/:userId",authController.generateCard)
authRoute.post("/upload-card/:userId",authController.uploadCard)