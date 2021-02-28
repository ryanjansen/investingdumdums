import React from "react";

import styles from "./aboutContainer.module.css";

const AboutContainer = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AboutContainer;
