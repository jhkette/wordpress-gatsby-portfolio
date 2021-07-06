import React, { PureComponent } from "react";
import Toolbar from "./toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer.js";
import "../styles/layout.scss";

import { Helmet } from "react-helmet";

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
          <html lang="en" />
          <meta name="description" content="Portfolio" />
        </Helmet>
        <SideDrawer show={this.state.sideDrawerOpen} />
        <div className="maincontent">
          {/* passdown click handler(thatc calls function) and state value
          of sidedrawer to toolbar. The latter is used to conditionallly change the
          css in the drawertoggle.js component */}
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            change={this.state.sideDrawerOpen}
          />
          <main className="container-bodycontent">{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
