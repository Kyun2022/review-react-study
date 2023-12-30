import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const usePost = (id) => {
  const { data, error } = useSWR(
    id ? `${API_URL}/comments?_limit=10/posts/${id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
