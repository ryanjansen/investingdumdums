import React from "react";
import styles from "./hero.module.css";
import Img from "gatsby-image";

const Hero = ({ heroImage }) => {
  return (
    <div className={styles.hero}>
      <Img
        className={styles.heroImage}
        title="hero image"
        alt="Stock chart"
        fluid={heroImage.childImageSharp.fluid}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Want to invest?</h1>
        <p className={styles.paragraph}>
          Trial my Investing Course! It covers the basics and will teach you how to evaluate a stock
          and build a strong portfolio to provide you outsized returns.
        </p>
        <a
          href="https://calendly.com/investingdumdums/investing-basics"
          alt="Investing Basics Booking"
          target="_blank"
        >
          <button className={styles.btn}>Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
