import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggle.js";
import { Link } from "gatsby";
import  Github  from "../../images/github.svg";
import  Codepen from "../../images/codepen.svg";
import "../../styles/Toolbar.scss";

const activeStyle = {
  color: "#008489"
}


const Toolbar = props => (
  <header className="toolbar">
    <div className="toolbar__navigation">
      <div className="heading">
        <div className="toolbar__logo">
          <h1>
            <Link to="/">Joseph Ketterer</Link>
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
            <Link to="/" activeStyle ={activeStyle}>Home</Link>
          </li>
        
          <li>
            <Link to="/sample-page/" activeStyle ={activeStyle}>About</Link>
          </li>
          <li>
            <Link to="/posts" activeStyle ={activeStyle}>All projects</Link>
          </li>
          <li>
            <Link to="/allposts" activeStyle ={activeStyle}>All posts</Link>
          </li>
        </ul>
        </nav>

      <nav className="nav-icons">
        <ul>
          <li>
            <a href="https://github.com/jokhenry89" title="github"><img className="iconl github" alt="Github" src ={Github} /></a>
          </li>
        
          <li>
            <a href="https://codepen.io/jokhenry89/" title="codepen"><img className="iconl codepen" alt="Codepen" src ={Codepen} /></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Toolbar;
