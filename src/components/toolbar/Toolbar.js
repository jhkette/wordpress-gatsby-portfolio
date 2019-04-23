import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggle.js";
import "./Toolbar.scss";
import { Link } from "gatsby";

const Toolbar = props => (
  <header className="toolbar">
    <div className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton
          clicked={props.drawerClickHandler}
          change={props.change}
        />
      </div>
      <div className="toolbar__logo">
        <h1>
          <Link to="/">Portfolio</Link>
        </h1>
      </div>
      <div className="spacer" />
      <p>
        {" "}
        lLorem ipsum dolor sit amet, pro mundi commodo at. Numquam honestatis e
        deterruisset mel.
      </p>
      <div className="toolbar_navigation-items">
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
      </div>
    </div>
  </header>
);

export default Toolbar;
