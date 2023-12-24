// Components Imports
import { Header } from "src/components/Header";
// Library Imports
import React, { useCallback, useEffect, useState } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Header />
      <div className="block">
        {posts.length > 0 ? (
          <ol className="list-decimal">
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ol>
        ) : null}
      </div>
    </>
  );
};

export default Home;
