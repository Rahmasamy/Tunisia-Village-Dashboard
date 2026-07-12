import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import { useAuthStore } from "../store/auth.store";
import { LoginDTO } from "../types/auth.types";
import { getErrorMessage } from "@/src/shared/lib/utils/Error/get-error-message";
import { toast } from "react-hot-toast"; // Assuming you use this
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginDTO) => login(data),
    onSuccess: (data) => {
      setUser(data.user || null);
      toast.success("ØªÙ… ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¨Ù†Ø¬Ø§Ø­");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

