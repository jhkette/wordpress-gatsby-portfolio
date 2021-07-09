import React, { Component } from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/Layout";
import ProjectSnippet from "../components/ProjectSnippet/projectSnippet";
import BlogSnippet from "../components/BlogSnippet/BlogSnippet";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    const data = this.props.data.projects; //data for projects
    const allposts = this.props.data.posts; //data for posts

    return (
      <Layout>
        <Helmet>
          <title>Portfolio: Joseph Ketterer</title>
        </Helmet>
        <h1 className="lead-intro">
          I am a junior web developer with experience with HTML, CSS,
          Javascript, React, PHP, Python and MySQL.
        </h1>
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
