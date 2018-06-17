/* istanbul ignore file */
import tinyColor from 'tinycolor2'
import { css } from 'react-emotion'

// sizes
export const inherit = ({ theme }) => css`font-size: inherit;`
export const small = ({ theme }) => css`font-size: ${theme.smallFontSize};`
export const medium = ({ theme }) => css`font-size: ${theme.mediumFontSize};`
export const large = ({ theme }) => css`font-size: ${theme.largeFontSize};`

// base (default/fallback)
export const linkBase = ({ theme }) => css`
  display: inline-block;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.defaultLinkColor};
  &:hover {
    color: ${tinyColor(theme.primaryLinkColor).lighten(10).toString()};
  }
`

// options
export const primary = ({ theme }) => css`
  color: ${theme.primaryLinkColor};
  &:hover {
    color: ${tinyColor(theme.primaryLinkColor).lighten(10).toString()};
  }
`

export const secondary = ({ theme }) => css`
  color: ${theme.defaultLinkColor};
  &:hover {
    color: ${tinyColor(theme.defaultLinkColor).lighten(40).toString()};
  }
`
