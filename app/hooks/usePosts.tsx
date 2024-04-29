import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export function useAllPosts() {
  const { data, error, isLoading, mutate } = useSWR("/api/posts/all", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
