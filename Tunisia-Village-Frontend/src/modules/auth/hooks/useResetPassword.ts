import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../services/reset-password";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
