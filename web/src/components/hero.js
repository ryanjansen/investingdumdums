import React from "react";
import styles from "./hero.module.css";
import Img from "gatsby-image";


const Hero = ({heroImage}) => {
  return (
    <div className={styles.hero}>
    <Img className={styles.heroImage} title="hero image" alt="Stock chart" fluid={heroImage.childImageSharp.fluid}/>
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
