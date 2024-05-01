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

export function usePosts(id: string | undefined) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts/user/${id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
