import React, { Component } from "react";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import "../styles/404.scss";

export default class fourofour extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Portfolio: Joseph Ketterer</title>
        </Helmet>
        <div className="not-found">
          <h1 className="heading-warning">404!</h1>
          <p>This page doesn't exist!</p>
        </div>
      </Layout>
    );
  }
}
