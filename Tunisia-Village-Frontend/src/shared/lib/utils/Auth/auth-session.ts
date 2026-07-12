import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { queryClient } from "@/src/shared/lib/react-query/query-client";

export const clearSession = () => {
  useAuthStore.getState().logout();
  queryClient.clear();
};
