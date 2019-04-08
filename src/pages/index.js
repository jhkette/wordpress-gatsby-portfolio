import React, { Component } from "react"
import { Link, graphql } from "gatsby"




import Img from "gatsby-image"
import FluidGrid from 'react-fluid-grid'
import Layout from '../components/Layout'
import Code from "../images/code.svg"




const styleStrategies = [
  { mediaQuery: '(max-width: 768.9px)', style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 769px) and (max-width: 1023.9px)', style: { numberOfColumns: 2, gutterHeight: 15, gutterWidth: 15 } },
  { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 3, gutterHeight: 30, gutterWidth: 30 } }
]

const styleStrategies2 = [
  { mediaQuery: '(max-width: 768.9px)', style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 769px) and (max-width: 1023.9px)', style: { numberOfColumns: 3, gutterHeight: 15, gutterWidth: 15 } },
  { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 2, gutterHeight: 30, gutterWidth: 30 } }
]
const transition = 'top 200ms ease-in-out, left 200ms ease-in-out'

class Home extends Component {
 

  render() {
    const data = this.props.data.projects
    const allposts = this.props.data.posts
    console.log(data);
   
 
  
    return (
    <Layout>
      
      <FluidGrid className ="posts" styleStrategies={styleStrategies} transition={transition}>
      
        {data.edges.map(({ node }) => (
          <article key={node.slug} className="homepost" >
          <Link to={`/post/${node.slug}/`} css={{ textDecoration: `none` }}>
           <Img className="bloglead" fluid={node.featured_media.localFile.childImageSharp.fluid} /> 
           </Link>
            
            <Link to={`/post/${node.slug}/`} css={{ textDecoration: `none` }}>
              <h3 className="slug">{node.title}</h3>
            </Link>
            <div class="codelist">
            <img src = {Code} alt = "code" className="code" />
            {node.acf.test !== null ?
                
                <p dangerouslySetInnerHTML={{__html: node.acf.test }} className="categories"></p>
                : ''
                }
            </div>      
            <div className="excerpt"  dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </article>
        ))}
        </FluidGrid>
        <section>
        <h2>Posts</h2>
      
        
      <FluidGrid className ="posts" styleStrategies={styleStrategies2} transition={transition}>
      
        {allposts.edges.map(({ node }) => (
          <article key={node.slug} className="allpost" >
           
            <Link to={`/post/${node.slug}/`} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>   
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
           
          </article>
        ))}
        </FluidGrid>
      
          </section>
        </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
query 
{
  projects: allWordpressPost(filter: {acf: {status: {eq: "project"}}}, limit: 6) {
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
              fluid(maxWidth: 220, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  posts: allWordpressPost(filter: {acf: {status: {eq: "post"}}}, limit: 2) {
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
`