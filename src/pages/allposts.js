import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import Masonry from 'react-masonry-component'
import Layout from "../components/Layout";
import Circle from "../components/circles.js";
import {Helmet} from 'react-helmet';


  
class BlogPosts extends Component {
  render() {
    const data = this.props.data.posts;
    return (
    <Layout>
    <Helmet>
        <title>Portfolio: All Projects</title>
      </Helmet>
    
      <section>
      <h2>All Posts</h2>
          <Circle />
          <Masonry 
            className="container-projects-blogposts blog">
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
