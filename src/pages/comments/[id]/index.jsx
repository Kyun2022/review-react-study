import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>{data.body}</h1>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>
    </div>
  );
};

const CommentsId = () => {
  return (
    <div>
      <Header />
      <CommentComponent />
    </div>
  );
};

export default CommentsId;
