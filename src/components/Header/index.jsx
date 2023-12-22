// Styles Import
import classes from "src/components/Header/Header.module.css";
import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index",
  },
  {
    href: "/about",
    label: "About",
  },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} className={classes.anchor}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
