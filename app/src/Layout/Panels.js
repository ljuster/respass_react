import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'

export const centerContentsVert = `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Panel = styled.div(props => css`
  height: 100%;
  ${props.centerContentsVert ? centerContentsVert : ''}
`)

Panel.propTypes = {
  centerContentsVert: PropTypes.bool
}

export const PanelFill = styled.div(props => css`
  width: 100%;
  height: 100%;
  ${props.centerContentsVert ? centerContentsVert : ''}
`)

PanelFill.propTypes = {
  centerContentsVert: PropTypes.bool
}
