import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggle.js";
import { Link } from "gatsby";
import  Github  from "../../images/github.svg";
import  Codepen from "../../images/codepen.svg";
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
            <Link to="/sample-page/">About</Link>
          </li>
          <li>
            <Link to="/posts">All projects</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-icons">
        <ul>
          <li>
          <img className="github" src ={Github} />
          </li>
        
          <li>
          <img className="github" src ={Codepen} />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Toolbar;
