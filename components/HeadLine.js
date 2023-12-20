// Styles Import
import styles from "@/styles/Home.module.css";

export const HeadLine = (props) => {
  return (
    <div>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/pages/{props.page}.js</code>
      </p>
    </div>
  );
};
