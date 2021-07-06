import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectSnippet from "../components/ProjectSnippet/projectSnippet";
import Masonry from "react-masonry-component";
import { Helmet } from "react-helmet";

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
            <ProjectSnippet node={node} key={node.title} />
          ))}
        </Masonry>
      </Layout>
    );
  }
}
export default IndexPage;

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
