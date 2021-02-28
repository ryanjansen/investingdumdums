import React from "react";

import styles from "./homeContainer.module.css";


const HomeContainer = ({ children, Sidebar }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
      {Sidebar && <Sidebar />}
    </div>
  );
};

export default HomeContainer;
