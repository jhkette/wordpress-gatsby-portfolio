import React, { PureComponent } from 'react'
import styled,  { injectGlobal } from 'styled-components'

import "./layout.scss"

import rem from '../utils/rem'
import Nav from './Nav'
import Footer from './Footer'

injectGlobal`
  body {
    margin: 0;
    font-family: "Source Sans Pro";
    letter-spacing: ${rem(.25)};
  }
`

// const Wrapper = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
 
// `



class Layout extends PureComponent {
  state = {
    isMobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  // onRouteChange = () => {
  //   this.setState({
  //     isMobileNavFolded: true,
  //   })
  // }

  render() {
    const { isMobileNavFolded } = this.state
    return (
      <div clasname= "wrapper">
        <div class="maincontent">
         
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
        />
        
       
 
        <div className ="container">
        {this.props.children}
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
