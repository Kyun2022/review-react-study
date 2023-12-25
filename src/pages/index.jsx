// Components Imports
import { Header } from "src/components/Header";
// Library Imports
import React from "react";
import { Posts } from "src/components/Posts";

const Home = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
