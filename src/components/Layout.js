import React, { PureComponent } from 'react'
import styled,  { injectGlobal } from 'styled-components'

import "./layout.scss"

import Toolbar from './toolbar/toolbar'
import SideDrawer from './SideDrawer/SideDrawer.js'
import Backdrop from './backdrop/backdrop'
import Footer from './Footer'
import './layout.scss'

// const Wrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
 
// `



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

  render() {
    let backDrop;
    if(this.state.sideDrawerOpen){
      
      backDrop =  <Backdrop click={this.backdropClickHandler} />
    }
   
    return (
      <div className = "wrapper">
        <div className = "maincontent">
          <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
          <SideDrawer show = {this.state.sideDrawerOpen} />
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
