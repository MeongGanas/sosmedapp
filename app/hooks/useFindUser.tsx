import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useFindUser(username: string | undefined) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/user/find/${username}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
