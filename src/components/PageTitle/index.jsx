// Style Import
import classes from "src/components/PageTitle/PageTitle.module.css";
// Library Imports
import React from "react";

export const PageTitle = (props) => {
  return (
    <div className={classes.center}>
      <h1>{props.title} Page</h1>
    </div>
  );
};