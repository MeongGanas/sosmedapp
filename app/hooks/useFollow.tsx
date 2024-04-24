import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useFollow(id: string | undefined) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/user/follower/${id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
