import React from "react";
import "../../styles/SideDrawer.scss";
import { Link } from "gatsby";
const SideDrawer = props => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" title="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" title="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/posts" title="All projects">
            All projects
          </Link>
        </li>
        <li>
          <Link to="/allposts" title="All posts">
            All posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
