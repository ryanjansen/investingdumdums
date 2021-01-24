import React from "react";
import { Link } from "gatsby";
import styles from "./pager.module.css";

const Pager = ({ pageContext }) => {
  console.log(pageContext);
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <nav className={styles.nav}>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath}>
            <button className={styles.next}>← Newer Posts</button>
          </Link>
        )}
      </div>
      <div style={{ justifySelf: "flex-end" }}>
        {nextPagePath && (
          <Link to={nextPagePath}>
            <button className={styles.prev}>Older Posts →</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pager;
