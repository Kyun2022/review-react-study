// Components Imports
import { Header } from "src/components/Header";
import { usePost } from "src/hooks/usePost";
// Library Imports
import React from "react";
import { Post } from "src/components/Post";

const PostId = () => {
  const { post, user, error, isLoading } = usePost();

  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
