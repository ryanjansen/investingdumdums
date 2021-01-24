import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import styles from "./blog-post-preview-list.module.css";

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <Link to="/blog">
          <button className={styles.browse}>{props.browseMoreHref}</button>
        </Link>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
