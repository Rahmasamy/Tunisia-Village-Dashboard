import { useMutation } from "@tanstack/react-query";
import { uploadCard } from "../services/card";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useUploadCard = () => {
  return useMutation({
    mutationFn: uploadCard,
    onSuccess: () => {
      toast.success("تم رفع الكارنيه بنجاح");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

