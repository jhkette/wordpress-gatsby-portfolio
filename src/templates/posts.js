import React, { Component } from "react"
import Link from "gatsby-link"
import Layout from '../components/Layout'
import Img from "gatsby-image"
import FluidGrid from 'react-fluid-grid'

const NavLink = props => {
    if (!props.test) {
        
      return <Link to={props.url}>{props.text}</Link>
    } else {
      return <span>{props.text}</span>
    }
  }
  const styleStrategies = [
    { mediaQuery: '(max-width: 719.9px)', style: { numberOfColumns: 1, gutterHeight: 5, gutterWidth: 0 } },
    { mediaQuery: '(min-width: 720px) and (max-width: 1023.9px)', style: { numberOfColumns: 1, gutterHeight: 15, gutterWidth: 15 } },
    { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 2, gutterHeight: 30, gutterWidth: 30 } }
  ]
    const transition = 'top 200ms ease-in-out, left 200ms ease-in-out'
    const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    

    return (
      <Layout>
         <h2>All Posts</h2>
         <div>
           <FluidGrid className ="posts" styleStrategies={styleStrategies} transition={transition}>
             {group.map(({ node }) => (
               <section key={node.slug} className="post">
                 {node.featured_media.localFile.childImageSharp.resolutions &&
                 <div>
                   <Link to={'post/' + node.slug}>
                       <Img className="bloglead" resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
                   </Link>
                   <Link to={'post/' + node.slug}>
                       <h3>{node.title}</h3>
                   </Link>
                         
                </div>
                }
                <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}}></div> 
                </section>
                
            ))}
            </FluidGrid>
            
           
            <div className="previousLink">
        <NavLink test={first} url={`/posts/${previousUrl}`} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={`/posts/${nextUrl}`} text="Go to Next Page" />
      </div>
    </div>
    </Layout>
  )
}
export default IndexPage