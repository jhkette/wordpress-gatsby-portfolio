import React, { PureComponent } from "react";
import Toolbar from "./toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer.js";
import "../styles/layout.scss";
import {Helmet} from 'react-helmet';

class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
     
      <div className="wrapper">
      <Helmet>
        <title>All blog posts</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
        <SideDrawer show={this.state.sideDrawerOpen} />
        <div className="maincontent">
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            closeHandler={this.closeHandler}
            change={this.state.sideDrawerOpen}
          />
          <main className="container-bodycontent">{this.props.children}</main>
        </div>
        <footer />
      </div>
    );
  }
}

export default Layout;
