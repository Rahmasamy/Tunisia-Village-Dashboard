import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../services/verify-otp";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
