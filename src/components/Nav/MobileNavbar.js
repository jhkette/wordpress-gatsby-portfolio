import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import rem from '../../utils/rem'
import { navbarHeight } from '../../utils/sizes'
import { mobile } from '../../utils/media'
import NavLinks from './NavLinks'

import NavSeparator from './NavSeparator'
import NavButton from './NavButton'

const Wrapper = styled.div`
  display: none;

  ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `)}
`

const SecondaryMenu = styled.div`
  position: absolute;
  top: 3.125rem;
  left: 0;
  right: 0;
  ${p => p.open ? css`
    height: 100%;
    width: 100%;
   
    z-index: 3;
  ` : css`
    height: 0;
    width: 25%;
  `}
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  background: rgba(198, 198, 198, 1);
  color: #1a1a1a;
  margin-top: .5rem;
  h1{
    font-size: 1rem;
  }
`

const LogoLink = styled(Link).attrs({
  to: '/',
  'aria-label': 'home',
})`
  display: inline-block;
  vertical-align: center;
  margin-right: 1.25rem;
  color: currentColor;
`

const IconWrapper = styled.div`
  transition: transform 0.1s;
  color: #1a1a1a;
  
  ${p => p.rotate && css`
    transform-origin: 50% 55%;
    transform: rotate(180deg);
  `}
`

const SecondaryMenuItem = styled.div`
  // padding-right: 1.25rem;
`

const MobileNavbar = props => {
  const {
    isMobileNavFolded,
    onMobileNavToggle,
  } = props

  return (
    <StaticQuery query={graphql` query { site { siteMetadata { title } } } `} render={data => (
      <Wrapper>
      <NavButton
            onClick={onMobileNavToggle}
            active={!isMobileNavFolded}
          >
            <IconWrapper rotate={!isMobileNavFolded}>
              <FontAwesomeIcon icon={faChevronDown} />
            </IconWrapper>
          </NavButton>
       

        <Wrapper>
        <LogoLink>
          <h1>{data.site.siteMetadata.title}</h1>
        </LogoLink>
       
        </Wrapper>

        <SecondaryMenu open={!isMobileNavFolded}>
          <NavLinks />
          <NavSeparator />
         
        </SecondaryMenu>
      </Wrapper>
    )} />
  )
}

export default MobileNavbar
