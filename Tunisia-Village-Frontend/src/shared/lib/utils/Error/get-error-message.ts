import axios from "axios";

export function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? "Unexpected error";
  }
  return error instanceof Error ? error.message : "Unexpected error";
}
