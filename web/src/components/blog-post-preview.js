import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle2 } from "./typography.module.css";

import calendar from "../images/calendar.svg";
import comment from "../images/comment.svg";

function BlogPostPreview(props) {
  
  return (
    <div className={styles.root}>
      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
        <div className={styles.meta}>
          <h3 className={cn(responsiveTitle2, styles.title)}>{props.title}</h3>

          <div className={styles.postInfo}>
            {props.authors?.length !== 0 && (
              <p className={styles.author}>By {props.authors?.[0].author.name}</p>
            )}
            <div className={styles.date}>
              <img src={calendar} alt="calendaricon" className={styles.calendar} />{" "}
              {format(props.publishedAt, "MMMM Do, YYYY")}
            </div>
          </div>
        </div>

        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto("format")
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className={styles.textHolder}>
          <div className={styles.text}>
            {props._rawExcerpt && (
              <div className={styles.excerpt}>
                <PortableText blocks={props._rawExcerpt} />
              </div>
            )}
            <p className={styles.continue}>Continue Reading &rarr;</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostPreview;
