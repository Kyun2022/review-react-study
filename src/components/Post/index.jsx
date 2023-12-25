import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div className="">Loading...</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }

  return (
    <>
      <div className="max-w-screen-md mx-auto ">
        <h1 className="text-start">{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <p>Created by {user.name}</p> : null}
      </div>
    </>
  );
};
