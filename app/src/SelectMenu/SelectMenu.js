import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import StyledSelectMenu from './StyledSelectMenu'
import { Arrow } from 'src/Icons'
import { css } from 'react-emotion'
import { withProps } from 'recompose'

// Arrow color
/* istanbul ignore next */
const arrowIcon = css`
  fill: #999;
`

/* istanbul ignore next */
const enhance = withProps({ className: arrowIcon })

const SelectMenu = ({
  maxWidth,
  handelOnChange,
  selectedOption,
  ...restProps
}) => (
  <StyledSelectMenu maxWidth={maxWidth}>
    <Select
      clearable={false}
      arrowRenderer={enhance(Arrow)}
      value={selectedOption}
      onChange={handelOnChange}
      {...restProps}
    />
  </StyledSelectMenu>
)

SelectMenu.propTypes = {
  maxWidth: PropTypes.string,
  handelOnChange: PropTypes.func,
  selectedOption: PropTypes.string
}

SelectMenu.defaultProps = {
  maxWidth: '220px',
  handelOnChange: () => {},
  selectedOption: ''
}

export default SelectMenu
