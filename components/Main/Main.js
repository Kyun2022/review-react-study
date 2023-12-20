// Styles Import
import classes from "./Main.module.css";
// Library Imports
import React from "react";
// Components Imports
import { Links } from "../Links/Links";
import { PageTitle } from "../PageTitle/PageTitle";
import { Footer } from "../Footer/Footer";
import { HeadLine } from "../HeadLine/HeadLine";

export const Main = (props) => {
  return (
    <main className={`${classes.main}`}>
      <div className={classes.description}>
        <HeadLine page={props.page}>
          <code className={classes.code}>src/pages/{props.page}.js</code>
        </HeadLine>
        <Footer />
      </div>

      <PageTitle title={props.title} />
      <Links />
    </main>
  );
};
