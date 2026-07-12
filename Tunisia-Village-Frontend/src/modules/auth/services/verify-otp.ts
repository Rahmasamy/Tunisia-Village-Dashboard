import { apiClient } from "@/src/shared/api/api-client";
import { VerifyOtpDTO } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const verifyOtp = async (data: VerifyOtpDTO) => {
  const response = await apiClient.post(authApiConfig.endpoints.verifyOtp, data);
  return response.data;
};
