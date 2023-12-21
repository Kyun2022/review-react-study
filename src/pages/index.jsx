// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

const Home = (props) => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    if (count < 10) {
      setCount((count) => ++count);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

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
