import React from "react";
import "./SideDrawer.scss";
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
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/sample-page/">About</Link>
          </li>
          <li>
            <Link to="/posts">All projects</Link>
          </li>
          <li>
            <Link to="/allposts">All posts</Link>
          </li>
        </ul>
    </nav>
  );
};

export default SideDrawer;
