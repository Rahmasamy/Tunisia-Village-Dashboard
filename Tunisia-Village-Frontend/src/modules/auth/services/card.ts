import { apiClient } from "@/src/shared/api/api-client";
import { authApiConfig } from "../config/api.config";

export const downloadCard = async (userId: string | number) => {
  const response = await apiClient.get(authApiConfig.endpoints.getCard(userId), { responseType: 'blob' });
  return response.data;
};

export const uploadCard = async (userId: string | number) => {
  const response = await apiClient.post(authApiConfig.endpoints.uploadCard(userId));
  return response.data;
};

