// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";

const Home = (props) => {
  const handleClick = useCallback((e) => {
    alert("kyun");
  }, []);

  useEffect(() => {
    console.log("🚀 ~ 確認", "マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("🚀 ~ 確認", "アンマウント時");

      document.body.style.backgroundColor = "";
    };
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
