import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import rem from '../../utils/rem'

import { mobile } from '../../utils/media'
import NavLinks from './NavLinks'

import MobileNavbar from './MobileNavbar'

const Wrapper = styled.nav`
 
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 100%;
  font-size: ${rem(15)};
  font-weight: 500;
  background: #ededed;
  transition: background 300ms ease-out;
  color: #1a1a1a;
  padding: 2rem;
  width: 15rem;

  a {
    text-decoration: none;
  }
  ${mobile(css`
  padding: .5rem;
  width: 100%;
`)}
`

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  ${mobile(css`
    display: none;
  `)}
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Intro = styled.p`
${mobile(css`
display: none;`)}
`
const Logo = styled.h1`
 font-size: 1.5rem;
`


const LogoLink = styled(Link).attrs({
    to: '/',
    'aria-label': 'home',
  })`
  display: inline-block;
  vertical-align: center;
  margin-right: ${rem(35)};
  color: currentColor;
  ${mobile(css`
  display: none;
`)}
`

class NavBar extends PureComponent {
  render() {
    const {
      onMobileNavToggle,
      isMobileNavFolded,
    } = this.props

    return (
      <StaticQuery query={graphql` query { site { siteMetadata { title } } } `} render={data => (
        <Wrapper>
        <LogoLink>
                <Logo>{data.site.siteMetadata.title}</Logo>
        </LogoLink>
        <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id pellentesque nulla.
           Phasellus odio libero, consequat ut erat quis.
           </Intro>
      
          <NormalNavbar>
         
            <StartWrapper>
            
              <NavLinks />
            </StartWrapper>
          
          </NormalNavbar>

          <MobileNavbar
            isMobileNavFolded={isMobileNavFolded}
            onMobileNavToggle={onMobileNavToggle}
          />
        </Wrapper>
      )} />
    )
  }
}

export default NavBar
