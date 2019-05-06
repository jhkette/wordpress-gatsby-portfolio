import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import FluidGrid from "react-fluid-grid";
import Layout from "../components/Layout";
import Code from "../images/code.svg";
import Circle from "../components/circles.js";

const transition = "top 200ms ease-in-out, left 200ms ease-in-out";
const styleStrategies2 = [

    {
      mediaQuery:  "(max-width: 1279.9px)",
      style: { numberOfColumns: 1, gutterHeight: 0, gutterWidth: 0 }
    },
    {
      mediaQuery: "(min-width: 1280px)",
      style: { numberOfColumns: 2, gutterHeight: 0, gutterWidth: 0 }
    }
  ];
  
class BlogPosts extends Component {
  render() {
    const data = this.props.data.posts;
   

    return (
    <Layout>
      <h2>All Posts</h2>


<section>
          

          <FluidGrid
            className="container-projects-posts"
            styleStrategies={styleStrategies2}
            transition={transition}
          >
            {data.edges.map(({ node }) => (
              <article key={node.slug} className="container-singlepost">
                <Link
                  to={`/post/${node.slug}/`}
                  style={{textDecoration: "none"}}
                >
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </article>
            ))}
          </FluidGrid>
        </section>
      </Layout>
    );
  }
}

export default BlogPosts;

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    posts: allWordpressPost(
      filter: { acf: { status: { eq: "post" } } }
    
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
         
        }
      }
    }
  }
`;
