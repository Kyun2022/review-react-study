// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const Home = (props) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => ++count);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => setIsShow((isShow) => !isShow), []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="block">
        {isShow ? (
          <div>
            <h1 className="center">{count}</h1>
            <button className="button" onClick={handleClick}>
              ボタン
            </button>
          </div>
        ) : null}

        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <Main page="index" title="Index" />
    </div>
  );
};

export default Home;
