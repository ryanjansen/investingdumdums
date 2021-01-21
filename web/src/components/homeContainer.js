import React from "react";

import styles from "./homeContainer.module.css";
import Sidebar from "./sidebar";

const HomeContainer = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default HomeContainer;
