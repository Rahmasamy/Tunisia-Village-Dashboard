import { apiClient } from "@/src/shared/api/api-client";
import { LoginDTO, AuthResponse } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const login = async (data: LoginDTO): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(authApiConfig.endpoints.login, data);
  return response.data;
};
