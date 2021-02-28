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
import Layout from "../containers/layout";
import Pager from "../components/pager";
import Sidebar from "../components/sidebar";

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

  query PostsQuery($skip: Int!, $limit: Int!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: $limit
      skip: $skip
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
  }
`;

const Posts = (props) => {
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

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <HomeContainer Sidebar={Sidebar}>
        {/* <Pager pageContext={props.pageContext} /> */}
        {postNodes && <BlogPostPreviewList nodes={postNodes} />}
        <Pager pageContext={props.pageContext} />
      </HomeContainer>
    </Layout>
  );
};

export default Posts;
