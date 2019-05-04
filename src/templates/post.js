import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Circle from "../components/threecircles.js";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <Layout>
        <Circle />
        <section className="container-allpost-content">
         
          <h2> {post.title}</h2>
         
          {post.acf.test && (
            <div className="categoriespost"> {post.acf.test}</div>
          )}
          {post.acf.leadimage.localFile.childImageSharp.resolutions && (
            <Img
              resolutions={
                post.acf.leadimage.localFile.childImageSharp.resolutions
              }
              className="lead-postimage"
            />
          )}
        
          {post.acf.url && ( 
             <a className ="link-highlight" href= {post.acf.url}> {post.acf.url}</a> 
          )}
          
          <div
            className="container text-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content

      categories {
        slug
        name
      }
      acf {
        test
        url
        leadimage {
          localFile {
            childImageSharp {
              resolutions(width: 700, height: 370) {
                src
                width
                height
              }
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
