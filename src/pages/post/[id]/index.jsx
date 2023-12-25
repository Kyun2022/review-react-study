// Components Imports
import { Header } from "src/components/Header";
// Library Imports
import React from "react";
import { useRouter } from "next/router";

const PostId = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="block">{router.query.id}</div>
    </>
  );
};

export default PostId;
