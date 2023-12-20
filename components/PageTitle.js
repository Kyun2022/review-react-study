// Style Import
import styles from "@/styles/Home.module.css";
// Library Imports
import React from "react";

export const PageTitle = (props) => {
  return (
    <div className={styles.center}>
      <h1>{props.title} Page</h1>
    </div>
  );
};
