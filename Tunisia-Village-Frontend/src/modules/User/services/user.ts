import { apiClient } from "@/src/shared/api/api-client";
import { User, UpdateUserDTO } from "../types/user.types";
import { userApiConfig } from "../config/api.config";

export const getMe = async (): Promise<User> => {
  const response = await apiClient.get<User>(userApiConfig.endpoints.me);
  return response.data;
};

export const updateMe = async (data: UpdateUserDTO): Promise<User> => {
  const response = await apiClient.put<User>(userApiConfig.endpoints.me, data);
  return response.data;
};
