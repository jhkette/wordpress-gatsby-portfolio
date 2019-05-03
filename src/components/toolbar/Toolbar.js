import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggle.js";
import { Link } from "gatsby";
import "./Toolbar.scss";


const Toolbar = props => (
  <header className="toolbar">
    <div className="toolbar__navigation">
      <div className="heading">
        <div className="toolbar__logo">
          <h1>
            <Link to="/">Portfolio</Link>
          </h1>
        </div>
        <nav className="toolbar__toggle-button">
          <DrawerToggleButton
            clicked={props.drawerClickHandler}
            change={props.change}
          />
        </nav>
      </div>
      <div className="spacer" />
      <p className ="toolbar-intro">
        {" "}
        lLorem ipsum dolor sit amet, pro mundi commodo at. Numquam honestatis e
        deterruisset mel.
      </p>
      <nav className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">All projects</Link>
          </li>
          <li>
            <Link to="/">All posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Toolbar;
