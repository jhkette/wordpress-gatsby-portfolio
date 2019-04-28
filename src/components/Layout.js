import React, { PureComponent } from "react";
import "./layout.scss";
import Toolbar from "./toolbar/toolbar";
import SideDrawer from "./SideDrawer/SideDrawer.js";
import Backdrop from "./backdrop/backdrop";

import "./layout.scss";

class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="wrapper">
        <SideDrawer show={this.state.sideDrawerOpen} />
        <div className="maincontent">
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            closeHandler={this.closeHandler}
            change={this.state.sideDrawerOpen}
          />

          <main className="right-container">{this.props.children}</main>
        </div>

        {backDrop}
      </div>
    );
  }
}

export default Layout;
