import React, {Component} from "react";
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';

class PageTemplate extends Component {
    render() {
      
        const currentPage = this.props.data.wordpressPage
       

    

        return (
            <Layout>
            <Helmet>
        <title>{currentPage.title}</title>
      </Helmet>
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
            </div>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }

    }
`