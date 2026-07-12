import { apiClient } from "@/src/shared/api/api-client";
import { RegisterDTO, AuthResponse } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const registerUser = async (data: RegisterDTO): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(authApiConfig.endpoints.register, data);
  return response.data;
};
