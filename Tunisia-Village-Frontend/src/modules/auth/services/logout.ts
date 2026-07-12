import { apiClient } from "@/src/shared/api/api-client";
import { authApiConfig } from "../config/api.config";

export const logoutUser = async () => {
  const response = await apiClient.post(authApiConfig.endpoints.logout);
  return response.data;
};
