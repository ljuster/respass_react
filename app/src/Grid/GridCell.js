/* istanbul ignore file */
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

const GridCell = styled.section(props => css`
  ${props.sticky
    ? `
      position: absolute;
      height: ${props.rowHeight};
      &:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 20px;
        pointer-events: none;
        top: 0;
        right: -20px;
        background: linear-gradient(to right, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0) 100%);
      }
      &:before {
        content: '';
        position: absolute;
        background-color: ${props.maskColor || '#f0f0f0'};
        width: ${props.theme.tablePadding || 20}px;
        height: calc(100% + 2px);
        left: -${props.theme.tablePadding}px;
        top: -1px;
      }
    ` : `height: 100%;`}

  ${props.fixedWidth ? `width: ${props.fixedWidth};` : ''}
  min-width: ${props.minWidth || 0};
  align-content: space-around;
  grid-column-end: span ${props.width};
  grid-row-end: span ${props.height};

  ${props.left && `grid-column-start: ${props.left};`}
  ${props.top && `grid-row-start: ${props.top};`}

  ${props.center && `text-align: center;`}

  ${props.area && `grid-area: ${props.area};`}


  ${props.middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `}
`)

GridCell.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  rowHeight: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  middle: PropTypes.bool,
  center: PropTypes.bool,
  area: PropTypes.string,
  minWidth: PropTypes.string,
  sticky: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fixedWidth: PropTypes.string
}

GridCell.defaultProps = {
  className: '',
  width: 1,
  height: 1,
  rowHeight: undefined,
  top: undefined,
  left: undefined,
  middle: false,
  center: false,
  area: undefined,
  minWidth: '0',
  sticky: false,
  fixedWidth: undefined
}

export default GridCell
