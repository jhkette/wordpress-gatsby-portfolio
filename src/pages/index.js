import React, { Component } from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/Layout";
import ProjectSnippet from "../components/ProjectSnippet/projectSnippet";
import BlogSnippet from "../components/BlogSnippet/BlogSnippet";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    const data = this.props.data.projects;
    const allposts = this.props.data.posts;

    return (
      <Layout>
        <Helmet>
          <title>Portfolio: Joseph Ketterer</title>
        </Helmet>
        <Masonry className="container-projects-posts" aria role="main">
          {data.edges.map(({ node }) => (
            <ProjectSnippet node={node} key={node.title} />
          ))}
        </Masonry>
        <section className="container-section-post index" aria>
          <h2>Posts</h2>

          <Masonry className="container-projects-blogposts">
            {allposts.edges.map(({ node }) => (
              <BlogSnippet node={node} key={node.title} />
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
                fluid(maxWidth: 660) {
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
