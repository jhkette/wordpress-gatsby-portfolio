import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from '../components/Layout'


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions =post.featured_media.localFile.childImageSharp.resolutions

        return (
            <Layout>
            <section>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                {post.acf.test !== null ?
                
                <p dangerouslySetInnerHTML={{__html: post.acf.test }} className="categoriespost"></p>
                : ''
                }
                <Img resolutions ={resolutions} className="lead-postimage"/>
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
              }  
              featured_media{
                localFile{
                    childImageSharp{
                        resolutions(width: 700, height: 300){
                            src
                            width
                            height
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