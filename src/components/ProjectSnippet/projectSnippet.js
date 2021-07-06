import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Code from "./../../images/code.svg";
import xss from "xss";

export default class ProjectSnippet extends Component {
  constructor() {
    super();
    this.styles = "#008489";
    this.state = {
      hover: false
    };
  }
  splitCode = code => {
    const mainCode = code.split(",");
    return mainCode[0];
  };

  toggleHover = () => {
    this.setState({ hover: true });
  };

  turnHoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const node = this.props.node;
    return (
      <article key={node.slug} className="masonry-item-post">
        <Link
          to={`/post/${node.slug}/`}
          style={{ textDecoration: "none" }}
          onMouseOut={this.turnHoverOff}
          onMouseEnter={this.toggleHover}
          onFocus={this.toggleHover}
          onBlur={this.turnHoverOff}
        >
          <div className="img-wrapper">
            <p
              className="maincode"
              style={{
                backgroundColor: this.state.hover ? this.styles : "",
                opacity: this.state.hover ? 1 : 0
              }}
            >
              {this.splitCode(node.acf.test)}
            </p>
            {node.featured_media.localFile.childImageSharp.fluid && (
              <Img
                className="image-bloglead"
                fluid={node.featured_media.localFile.childImageSharp.fluid}
                alt={node.title}
              />
            )}
          </div>
        </Link>

        <h3 className="slug">
          {" "}
          <Link to={`/post/${node.slug}/`} style={{ textDecoration: "none" }}>
            {node.title}
          </Link>
        </h3>

        <div className="container-codelist">
          <img src={Code} alt="code" className="code" />

          {node.acf.test && (
            <p className="highlight-categories">{node.acf.test}</p>
          )}
        </div>

        <div
          className="excerpt"
          /* sanitize innerhtml */
          dangerouslySetInnerHTML={{ __html: xss(node.excerpt) }}
        />
      </article>
    );
  }
}
