import React from "react";
import Layout from "../containers/layout";
import styles from "./portfolio.module.css";

const PortfolioPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className="text-primary">My Portfolio</h1>
        <p>This is an updated look at my current portfolio.</p>
        <div className="text-primary">
          <h2>$IPOE: $17</h2>
          <h2>$CRWD: $195</h2>
          <h2>$PLTR: $20</h2>
          <h2>$MOGO: $7</h2>
        </div>
     <iframe frameBorder='0' scrolling='no' width='800' height='420' src="https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=FE67AD0F4A12483691B5805FC6EE17C4&symbol=SPY&compare=IPOE;CRWD;PLTR;MOGO&indices=SPX&addVolume=false&palette=Financial-Light&title=Anthony's%20Portfolio%20V.S.%20S%26P%20500&showLogo=No&animate=true"></iframe>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
