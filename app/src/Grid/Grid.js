import PropTypes from 'prop-types'
import styled from 'react-emotion'

export const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`

export const columns = ({ columns = 12 }) => typeof columns === 'number'
  ? `repeat(${columns}, 1fr)`
  : columns

export const gap = ({ gap = '8px' }) => `${gap} ${gap}`

export const flow = ({ flow = 'row' }) => flow

export const formatAreas = areas => areas.map(area => `'${area}'`).join(' ')

/* istanbul ignore next */
const Grid = styled.div`
  display: ${({ inline }) => inline ? 'inline-grid' : 'grid'};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  grid-template-columns: ${columns};
  grid-gap: ${gap};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`

/* istanbul ignore next */
Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string
}

export default Grid
