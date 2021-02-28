import React from "react";
import { Link } from "gatsby";
import styles from "./sidebar.module.css";
import ProfilePic from "../images/ProfilePic.png";

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <img className={styles.profile} src={ProfilePic} alt="Profile Pic" />
      <Link className={styles.link} to="/about">
        <h3 className={styles.heading}>About Me</h3>
        <p className={styles.paragraph}>
          I have a burning passion to invest and to get others to join me on the journey to compound
          their money. I see investing as one of the surest ways to bring us closer to our financial
          goals and to get more time to do what we are truly passionate about. I hope my little
          contributions here can help more people to start investing properly.
        </p>
      </Link>
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
