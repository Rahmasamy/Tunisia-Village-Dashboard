import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/register";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
