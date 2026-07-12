import { apiClient } from "@/src/shared/api/api-client";
import { ResetPasswordDTO } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const resetPassword = async (data: ResetPasswordDTO) => {
  const response = await apiClient.post(authApiConfig.endpoints.resetPassword, data);
  return response.data;
};
