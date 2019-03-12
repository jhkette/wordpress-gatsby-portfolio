import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { Content } from '../components/Scaffold'

import Lorem from '../components/Lorem'
import Img from "gatsby-image"
import FluidGrid from 'react-fluid-grid'
import Layout from '../components/Layout'


const styleStrategies = [
  { mediaQuery: '(max-width: 719.9px)', style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 720px) and (max-width: 1023.9px)', style: { numberOfColumns: 2, gutterHeight: 15, gutterWidth: 15 } },
  { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 3, gutterHeight: 30, gutterWidth: 30 } }
]
const transition = 'top 200ms ease-in-out, left 200ms ease-in-out'

class Home extends Component {
  drawerToggleClickHandler = () => {
    console.log('hello')
   
  };

  render() {
    const data = this.props.data
 
    console.log(data);
    return (
    <Layout>
      <h2>Projects</h2>
      <FluidGrid className ="posts" styleStrategies={styleStrategies} transition={transition}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug} className="homepost" >
            <Img className="bloglead" fluid={node.featured_media.localFile.childImageSharp.fluid} />
            <Link to={`/post/${node.slug}/`} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
           
          </div>
        ))}
        </FluidGrid>
        <div>
          <h2>Pages</h2>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              ))}
          </div>
        </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
query {
  allWordpressPage  {
    edges {
      node {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
  allWordpressPost(sort: { fields: [date], order: ASC  } )  {
    edges {
      node {
        title
        excerpt
        slug
        featured_media{
          localFile{
            childImageSharp{
              fluid(maxWidth: 220, maxHeight: 250){
                ...GatsbyImageSharpFluid
              }
           }
          }
      }
       
      }
    }
  }
}
`
