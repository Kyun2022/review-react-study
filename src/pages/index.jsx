// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

const Home = (props) => {
  const handleClick = useCallback((e) => {
    alert("kyun");
  }, []);

  return (
    <div>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" title="Index" />
    </div>
  );
};

export default Home;
