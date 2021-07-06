import React, { Component } from "react";
import xss from "xss";
import { Link } from "gatsby";
export default class BlogSnippet extends Component {
  render() {
    const node = this.props.node;
    return (
      <article key={node.slug} className="container-singlepost">
        <Link to={`/post/${node.slug}/`} style={{ textDecoration: "none" }}>
          <h3>{node.title}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: xss(node.excerpt) }} />
      </article>
    );
  }
}
