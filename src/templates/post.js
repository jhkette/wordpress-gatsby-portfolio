import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from '../components/Layout'


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
      
        

        return (
            <Layout>
            <section>
                <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                {post.acf.test !== null ?
                
                <p dangerouslySetInnerHTML={{__html: post.acf.test }} className="categoriespost"></p>
                : ''
                }
                {post.acf.leadimage.localFile.childImageSharp.resolutions !== null ?  
                <Img resolutions ={post.acf.leadimage.localFile.childImageSharp.resolutions} className="lead-postimage"/>
                 : ' ' } 
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {/* {post.acf !== null ?
                <p dangerouslySetInnerHTML={{__html:post.acf.social }}></p>
                : ''}
                 */}
               
               
            </section>
            </Layout>
        )
    }
}


export default PostTemplate

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
                leadimage{
                    localFile{
                        childImageSharp{
                            resolutions(width:700, height: 370){
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
`