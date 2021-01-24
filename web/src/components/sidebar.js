import React from "react";

import styles from "./sidebar.module.css";
import ProfilePic from "../images/ProfilePic.png";

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <img className={styles.profile} src={ProfilePic} alt="Profile Pic" />
      <h3 className={styles.heading}>About Me</h3>
      <p className={styles.paragraph}>
        Morbi quam hendrerit eu, massa tristique interdum sodales enim dui. Fermentum molestie diam
        sit lacinia fringilla nunc ac velit id. At egestas felis, porta morbi viverra a.
      </p>
      {/* <div className={styles.topPosts}>
        <h3 className={styles.heading}>Top Posts</h3>
        <ol className={styles.topPostsList}>
          <li>Really Long Article Heading</li>
          <li>Really Long Article Heading</li>
          <li>Really Long Article Heading</li>
          <li>Really Long Article Heading</li>
        </ol>
      </div> */}
    </div>
  );
};

export default Sidebar;
