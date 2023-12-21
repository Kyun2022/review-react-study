// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => ++count);
    setCount((count) => ++count);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    console.log("🚀 ~ ", count);
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="block">
      <Header />
      <h1>{count}</h1>
      <button className="button" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" title="Index" />
    </div>
  );
};

export default Home;
