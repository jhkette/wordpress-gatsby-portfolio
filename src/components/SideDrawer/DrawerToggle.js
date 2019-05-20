import React from "react";
import "../../styles/DrawerToggleButton.scss";

const drawerToggleButton = props => {
  let crossLines = "nav-icon1";
  if (props.change) {
    crossLines = "nav-icon1 open";
  }

  return (
    <div className={crossLines} onClick={props.clicked} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
};
export default drawerToggleButton;
