import React, { Component } from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/Layout";
import BlogSnippet from "../components/BlogSnippet/BlogSnippet";

import { Helmet } from "react-helmet";

class BlogPosts extends Component {
  render() {
    const data = this.props.data.posts;
    return (
      <Layout>
        <Helmet>
          <title>Portfolio: All Projects</title>
        </Helmet>
        <section className="container-section-post">
          <h2>All Posts</h2>

          <Masonry
            className="container-projects-blogposts blog"
            aria
            role="main"
          >
            {data.edges.map(({ node }) => (
              <BlogSnippet node={node} key={node.title} />
            ))}
          </Masonry>
        </section>
      </Layout>
    );
  }
}

export default BlogPosts;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    posts: allWordpressPost(filter: { acf: { status: { eq: "post" } } }) {
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
        }
      }
    }
  }
`;
