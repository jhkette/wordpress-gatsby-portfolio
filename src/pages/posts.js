import React, { Component } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";
import { Helmet } from "react-helmet";
import Code from "../images/code.svg";
import xss from "xss";

class IndexPage extends Component {
  render() {
    const data = this.props.data.projects;

    return (
      <Layout>
        <Helmet>
          <title>Portfolio: All posts</title>
        </Helmet>

        <h2 className="heading-project">All Projects</h2>
        <Masonry className="container-projects-posts" aria role="main">
          {data.edges.map(({ node }) => (
            <article key={node.slug} className="masonry-item-post">
              <Link
                to={`/post/${node.slug}/`}
                style={{ textDecoration: "none" }}
              >
                {node.featured_media.localFile.childImageSharp.fluid && (
                  <Img
                    className="image-bloglead"
                    fluid={node.featured_media.localFile.childImageSharp.fluid}
                    alt={node.title}
                  />
                )}
              </Link>
              <h3 className="slug">
                {" "}
                <Link
                  to={`/post/${node.slug}/`}
                  style={{ textDecoration: "none" }}
                >
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
          ))}
        </Masonry>
      </Layout>
    );
  }
}
export default IndexPage;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    projects: allWordpressPost(filter: { acf: { status: { eq: "project" } } }) {
      edges {
        node {
          title
          excerpt
          slug
          categories {
            id
            slug
            name
            description
          }
          acf {
            test
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 180) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
