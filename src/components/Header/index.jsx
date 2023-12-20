// Styles Import
import classes from "src/components/Header/Header.module.css";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link
        href={{
          pathname: "/",
        }}
        className={classes.anchor}
      >
        Index
      </Link>
      <Link
        href={{
          pathname: "/about",
        }}
        className={classes.anchor}
      >
        About
      </Link>
    </header>
  );
};
