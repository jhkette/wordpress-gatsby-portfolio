import React, { Component } from "react";
import { graphql } from 'gatsby' 
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Circle from "../components/threecircles.js";
import {Helmet} from 'react-helmet';

import "../styles/post.scss";


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <Layout>
      <Helmet>
        <title>Project: {post.title}</title>
      </Helmet>
    
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
              alt ={post.title}
            />
          )}
        
          {post.acf.url && (
            <div className = "container-arrow-link">
             <i> →</i>
             <a className ="link-highlight" title={post.title} href= {post.acf.url} > {post.acf.url}</a> 
            </div>
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
  }
`;
