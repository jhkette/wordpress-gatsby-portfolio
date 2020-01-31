import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/Layout";
// import Circle from "../components/circles.js";
import { Helmet } from "react-helmet";
import xss from "xss";
import Arrow from "./../images/arrow.svg";

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
          {/* <Circle /> */}
          <Masonry
            className="container-projects-blogposts blog"
            aria
            role="main"
          >
            {data.edges.map(({ node }) => (
              <article key={node.slug} className="container-singlepost">
                <Link
                  to={`/post/${node.slug}/`}
                  style={{ textDecoration: "none" }}
                >
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: xss(node.excerpt) }} />
                <div className="container-arrow-link home">
                  <img src={Arrow} alt="arrow" className="arrow home" />
                  {/* <Link
                    to={`/post/${node.slug}/`}
                    className="link-highlight home"
                  >
                    View Project
                  </Link> */}
                </div>
              </article>
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
