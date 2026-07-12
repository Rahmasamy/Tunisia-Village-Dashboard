import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../services/forgot-password";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useForgetPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

