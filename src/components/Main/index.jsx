// Styles Import
import classes from "src/components/Main/Main.module.css";
// Library Imports
import React, { useCallback, useState } from "react";
// Components Imports
import { Links } from "src/components/Links";
import { PageTitle } from "src/components/PageTitle";
import { Footer } from "src/components/Footer";
import { HeadLine } from "src/components/HeadLine";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs ->",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn ->",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates ->",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy ->",
    description:
      "Instantly deploy your Next.js site to a shareable URLl with&nbsp;Vercel.",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={`${classes.main}`}>
      <div className={classes.description}>
        <HeadLine page={props.page}>
          <code className={classes.code}>
            アイテムの数は {items.length} 個です 🚀
          </code>
        </HeadLine>
        <Footer />
      </div>

      <PageTitle title={props.title} />
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
};
