
import React, { Component } from "react";
import { graphql } from 'gatsby';
import Link from "gatsby-link";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import Masonry from 'react-masonry-component'

import Code from "../images/code.svg";
import Circle from "../components/circles.js";



class IndexPage extends Component {
  render() {
    const data = this.props.data.projects;
    

    return (
    <Layout>
      <h2>All Projects</h2>
      <Circle />
      <Masonry
          className="container-projects-posts"
         
        >
        {data.edges.map(({ node }) => (
            <article key={node.slug} className="container-post">
              <Link
                to={`/post/${node.slug}/`}
                style={{textDecoration: "none"}}
              >
              {node.featured_media.localFile.childImageSharp.fluid && 
                <Img
                  className="image-bloglead"
                  fluid={node.featured_media.localFile.childImageSharp.fluid}
                />
              }
              </Link>
                <h3 className="slug"> <Link
                to={`/post/${node.slug}/`}
                style={ {textDecoration: "none"} }
              >{node.title}</Link></h3>
              
              <div className="container-codelist">
                <img src={Code} alt="code" className="code" />
                {node.acf.test && (
                  <p className="highlight-categories">{node.acf.test}</p>
                )}
              </div>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
              <Link
                to={`/post/${node.slug}/`} class="button arrow">View Project</Link>
            </article>
          ))}
        </Masonry>  
    </Layout>
  );
};
}
export default IndexPage;



// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    projects: allWordpressPost(
      filter: { acf: { status: { eq: "project" } } }
    
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
