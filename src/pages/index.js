import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Masonry from "react-masonry-component";
import Layout from "../components/Layout";
import Code from "../images/code.svg";
import Circle from "../components/circles.js";
import { Helmet } from "react-helmet";
import xss from "xss";

class Home extends Component {
  render() {
    const data = this.props.data.projects;
    const allposts = this.props.data.posts;

    return (
      <Layout>
        <Helmet>
          <title>Portfolio: Joseph Ketterer</title>
        </Helmet>

        <Circle />
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
              <Link to={`/post/${node.slug}/`} className="button arrow">
                View Project
              </Link>
            </article>
          ))}
        </Masonry>

        <section className="container-section-post" aria role="complementary">
          <h2>Posts</h2>

          <Masonry className="container-projects-blogposts">
            {allposts.edges.map(({ node }) => (
              <article key={node.slug} className="container-singlepost">
                <Link
                  to={`/post/${node.slug}/`}
                  style={{ textDecoration: "none" }}
                >
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: xss(node.excerpt) }} />
                <Link to={`/post/${node.slug}/`} className="button small arrow">
                  View Post
                </Link>
              </article>
            ))}
          </Masonry>
        </section>
      </Layout>
    );
  }
}

export default Home;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    projects: allWordpressPost(
      filter: { acf: { status: { eq: "project" } } }
      limit: 6
    ) {
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
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    posts: allWordpressPost(
      filter: { acf: { status: { eq: "post" } } }
      limit: 2
    ) {
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
        }
      }
    }
  }
`;
