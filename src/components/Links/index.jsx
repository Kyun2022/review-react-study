// Style Import
import Link from "next/link";
import classes from "src/components/Links/Links.module.css";

export const Links = ({ items, handleReduce }) => {
  return (
    <div>
      <div className={classes.grid}>
        {items.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>
      <button onClick={handleReduce} className={classes.button}>
        減らす
      </button>
    </div>
  );
};
