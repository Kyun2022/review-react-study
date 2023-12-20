// Styles Import
import styles from "@/styles/Home.module.css";
// Library Imports
import React from "react";
// Components Imports
import { Links } from "./Links";
import { PageTitle } from "./PageTitle";
import { Footer } from "./Footer";
import { HeadLine } from "./HeadLine";

export const Main = (props) => {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.description}>
        <HeadLine page={props.page}>
          <code className={styles.code}>src/pages/{props.page}.js</code>
        </HeadLine>
        <Footer />
      </div>

      <PageTitle title={props.title} />
      <Links />
    </main>
  );
};
