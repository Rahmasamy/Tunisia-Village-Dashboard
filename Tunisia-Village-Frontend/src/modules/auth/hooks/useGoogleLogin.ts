import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "../services/google";
import { useAuthStore } from "../store/auth.store";
import { GoogleLoginDTO } from "../types/auth.types";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useGoogleLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  return useMutation({
    mutationFn: (data: GoogleLoginDTO) => googleLogin(data),
    onSuccess: (data) => {
      setUser(data.user || null);
      toast.success("تم تسجيل الدخول عبر جوجل بنجاح");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
