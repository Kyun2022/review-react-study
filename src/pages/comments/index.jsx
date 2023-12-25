import Head from "next/head";
import Link from "next/link";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No comment found.</p>;
  }
  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>{comment.body}</Link>
          </li>
        );
      })}
    </ol>
  );
};

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
