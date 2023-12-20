// Styles Import
import classes from "src/components/Main/Main.module.css";
// Library Imports
import React from "react";
// Components Imports
import { Links } from "src/components/Links";
import { PageTitle } from "src/components/PageTitle";
import { Footer } from "src/components/Footer";
import { HeadLine } from "src/components/HeadLine";

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
