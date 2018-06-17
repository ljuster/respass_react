/* istanbul ignore file */
import styled, { css } from 'react-emotion'

const ExpandableRow = styled.div(props => css`
  /* display grid to remove gaps between these rows: note flex and inline-flex work also */
  display: grid;
  max-height: ${props.heightClosed};
  overflow-y: hidden;
  overflow-x: scroll;
  transition: max-height 0.25s ease-out;
  ${props.isOpen && `
    max-height: ${props.heightOpened || '1500px'};
    transition: max-height 1s ease-in-out;
  `}
  /* for testing */
  &:hover {
    max-height: ${props.heightOpened || '1500px'};
    transition: max-height 1s ease-in-out;
  }
`)

export default ExpandableRow
