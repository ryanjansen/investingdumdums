import React from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "./about.module.css";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <div className={styles.content}>
          <h1 className="text-primary">About Me</h1>
          <p>
            Much delayed with ORD and CNY but we are finally here, to begin this burning passion of
            mine, my own personal quest to solving the money problem for myself and others.
          </p>
          <p>
            InvestingDumDums will be the go-to platform for financial literacy aimed at personal
            financial management and Investing. I will bring awareness to personal financial
            management and investing at an early age of around 16-18 where people are carrying out
            their O levels, in either polytechnic and Junior College. I will build up their basic
            knowledge, allow them to start working on paper accounts and when they enter NS and Uni,
            when they have the money, they put it to use on their own and derive returns on their
            capital. With financial literacy, they also wouldn't fall prey to "financial advisors"
            who mislead people into buying up Investment Linked Plans (ILPs) and other investment
            products that will not benefit them.
          </p>
          <p>
            With people starting to invest from 18, their time horizon would be much longer,
            allowing them to compound their money even more and hence, reduce their financial
            worries in the future.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "man.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 500, height: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default AboutPage;
