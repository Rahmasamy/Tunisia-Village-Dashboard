import { apiClient } from "@/src/shared/api/api-client";
import { GoogleLoginDTO, AuthResponse } from "../types/auth.types";
import { authApiConfig } from "../config/api.config";

export const googleLogin = async (data: GoogleLoginDTO): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(authApiConfig.endpoints.google, data);
  return response.data;
};
