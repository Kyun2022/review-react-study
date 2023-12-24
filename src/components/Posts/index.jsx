// Library Imports
import React, { useCallback, useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to retrieve data because an error occurred");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div className="">Loading...</div>;
  }
  if (error) {
    return <div className="">{error.message}</div>;
  }
  if (posts.length === 0) {
    return <div className="">No data...</div>;
  }

  return (
    <>
      <div className="block">
        <ol className="list-decimal">
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      </div>
    </>
  );
};