import { apiClient } from "@/src/shared/api/api-client";
import { ForgetPasswordDTO } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const forgotPassword = async (data: ForgetPasswordDTO) => {
  const response = await apiClient.post(authApiConfig.endpoints.forgotPassword, data);
  return response.data;
};
