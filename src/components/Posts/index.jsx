import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div className="">Loading...</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }
  if (isEmpty || !data) {
    return <div className="">No data...</div>;
  }

  return (
    <>
      <div className="block">
        <ol className="list-decimal">
          {data.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
