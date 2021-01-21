import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Want to invest?</h1>
        <p className={styles.paragraph}>
          {`There's no better time to learn than now.
          Start now and lose all your money!`}
        </p>
        <button href="#" className={styles.btn}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
