import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import HomeContainer from "../components/homeContainer";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Layout from "../containers/layout";
import Sidebar from "../components/sidebar"

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 8
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          authors {
            author {
              name
            }
          }
        }
      }
    }
    heroImage: file(relativePath:{eq:"hero.png"}) {childImageSharp{
      fluid(maxWidth:1240) {
        ...GatsbyImageSharpFluid
      }
    }}
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;



  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero heroImage={data.heroImage} />
      <HomeContainer Sidebar={Sidebar}>
        {postNodes && <BlogPostPreviewList nodes={postNodes} browseMoreHref="See All Posts" />}
      </HomeContainer>
    </Layout>
  );
};

export default IndexPage;
