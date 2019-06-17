import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
// import Circle from "../components/circles.js";
import xss from "xss";

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage;
    return (
      <Layout>
        <Helmet>
          <title>{currentPage.title}</title>
        </Helmet>
        {/* <Circle /> */}
        <section className="container-allpost-content" aria role="main">
          <h2> {currentPage.title} </h2>
          {/* sanitize innerhtml */}
          <div dangerouslySetInnerHTML={{ __html: xss(currentPage.content) }} />
        </section>
      </Layout>
    );
  }
}

export default PageTemplate;

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
`;
