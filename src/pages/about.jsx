// Components Imports
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
// Library Imports
import React from "react";

const about = (props) => {
  const {
    isShow,
    doubleCount,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <>
      <Header />
      <div className="block">
        {isShow ? (
          <div>
            <h1 className="center">{doubleCount}</h1>
            <button className="button" onClick={handleClick}>
              ボタン
            </button>
          </div>
        ) : null}

        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />

        <button onClick={handleAdd}>追加</button>

        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" title="About" />
    </>
  );
};

export default about;
