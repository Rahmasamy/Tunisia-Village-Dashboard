import { useMutation } from "@tanstack/react-query";
import { downloadCard } from "../services/card";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";

export const useDownloadCard = () => {
  return useMutation({
    mutationFn: downloadCard,
    onSuccess: (data) => {
      const url = window.URL.createObjectURL(new Blob([data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'card.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      toast.success("تم تحميل الكارنيه بنجاح");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
