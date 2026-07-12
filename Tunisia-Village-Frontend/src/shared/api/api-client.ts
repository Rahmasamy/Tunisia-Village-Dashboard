import axios from 'axios';
import { clearSession } from '../lib/utils/Auth/auth-session';
import env from './env';

export const apiClient = axios.create({
  baseURL: env.API_URL || 'http://localhost:8000',
  withCredentials: true,
});

export const refreshTokenApi = async () => {
  return apiClient.post('/auth/refresh-token');
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is unauthorized (401)
    const isUnauthorized = error.response?.status === 401;

    // Check if the failing request is the refresh token request itself to prevent infinite loops
    const isRefreshRequest = originalRequest.url?.includes('/auth/refresh-token');

    if (isUnauthorized && !originalRequest._retry && !isRefreshRequest) {
      try {
        originalRequest._retry = true;
        await refreshTokenApi();
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh token expired or failed
        clearSession();

        // Redirect to login with reason
        if (typeof window !== 'undefined') {
          window.location.href = '/login?reason=session-expired';
        }

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
