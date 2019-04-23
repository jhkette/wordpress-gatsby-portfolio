import React from "react";
import "./SideDrawer.scss";

const SideDrawer = props => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Index</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
