/* istanbul ignore file */
import tinyColor from 'tinycolor2'
import { css } from 'react-emotion'

// sizes
export const small = ({ theme }) => css`font-size: ${theme.smallFontSize};`
export const medium = ({ theme }) => css`font-size: ${theme.mediumFontSize};`
export const large = ({ theme }) => css`font-size: ${theme.largeFontSize};`

// base (default/fallback)
export const buttonBase = ({ theme }) => css`
  white-space: nowrap;
  padding: 3px ${theme.gutterLg};
  border: solid 1px ${theme.defaultColorLight};
  border-radius: 2px;
  text-align: center;
  background-color: #fff;
  color: ${theme.defaultColor};
  cursor: pointer;
  font-family: ${theme.semiboldFont};
  &:active, &:hover, &.active {
    color: ${tinyColor(theme.defaultColor).lighten(20).toString()};
    border: solid 1px ${theme.defaultColorLight};
    background-color: ${tinyColor(theme.defaultColor).lighten(79).toString()};
  }
`

// options
export const primary = ({ theme }) => css`
  color: ${theme.primaryColorInverse};
  border: solid 1px ${theme.primaryColor};
  background-color: ${theme.primaryColor};
  &:active, &:hover, &.active {
    color: ${tinyColor(theme.primaryColorInverse).lighten(10).toString()};
    border: solid 1px ${tinyColor(theme.primaryColor).lighten(10).toString()};
    background-color: ${tinyColor(theme.primaryColor).lighten(10).toString()};
  }
`

export const secondary = ({ theme }) => css`
  color: ${theme.secondaryColorInverse};
  border: solid 1px ${theme.secondaryColor};
  background-color: ${theme.secondaryColorLight};
  &:active, &:hover, &.active {
    color: ${tinyColor(theme.secondaryColorInverse).saturate(20).darken(5).toString()};
    border: solid 1px ${tinyColor(theme.secondaryColor).saturate(20).darken(5).toString()};
    background-color: ${tinyColor(theme.secondaryColorLight).saturate(20).darken(5).toString()};
  }
`
