import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggle.js';
import './Toolbar.scss';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton  clicked = {props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo"><h1><a href="/">Portfolio</a></h1></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sample">All projects</a></li>
                <li><a href="/sample">All posts</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;
