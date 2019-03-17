import React, { PureComponent } from 'react'


import "./layout.scss"

import Toolbar from './toolbar/toolbar'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Backdrop from './backdrop/backdrop'
import Footer from './Footer'
import './layout.scss'


class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false})
  }

  closeHandler = () =>{
    this.setState({sideDrawerOpen: false})
  }


 

  render() {
    let backDrop;
    if(this.state.sideDrawerOpen){
      
      backDrop =  <Backdrop click={this.backdropClickHandler} />
    }
   
    return (
      <div className = "wrapper">
        <SideDrawer show = {this.state.sideDrawerOpen} 
        click = {this.closeHandler}/>
        <div className = "maincontent">
          <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} 
          closeHandler = {this.closeHandler}/>
          
          <div className ="container">
            {this.props.children}
        </div>
        </div>
        <Footer />
        {backDrop}
      </div>
    )
  }
}

export default Layout
