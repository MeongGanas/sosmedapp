import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useDetailUser(username: string | undefined) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/user/${username}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
