import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { ImmutableLink } from 'redux-little-router/es/immutable'
import { ResortPassLogo } from 'src/Global'
import { Panel, PanelFill } from 'src/Layout'

/* istanbul ignore next */
export const HeaderContainer = styled.header(props => css`
  position: relative;
  width: 100%;
  height: ${props.theme.headerHeight}px;
  z-index: ${props.theme.zIndex1};
`)

/* istanbul ignore next */
const StaticHeader = styled(HeaderContainer.withComponent('div'))`
  position: fixed;
  display: flex;
  background-color: #888;
  color: #rrr;
`

/* istanbul ignore next */
const Title = styled.div(props => css`
  ${props.theme.h4}
`)

const Logo = styled(ResortPassLogo)`
  left: 20px;
  top: 3px;
  position: relative;
  padding: 0;
  height: auto;
`

// Since ImmutableLink isn't a styled component we can make it one and styled it.
// We create a styled <a /> on the fly with the css we want, then create a styled component
// from ImmutableLink using `withComponent`.
// Boom.
/* istanbul ignore next */
export const LogoLink = (styled.a`
`).withComponent(ImmutableLink)

const Header = ({ title }) => (
  <HeaderContainer>
    <StaticHeader>
      <Panel centerContentsVert>
        <LogoLink href='/foo'><Logo src='/img/resort-pass.svg' /></LogoLink>
      </Panel>
      <PanelFill centerContentsVert>
        { title && <Title>{title}</Title>}
      </PanelFill>
      {/*
      <Panel centerContentsVert></Panel>
      */}
    </StaticHeader>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: undefined
}

export default Header
