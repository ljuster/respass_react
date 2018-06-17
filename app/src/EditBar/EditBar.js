import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'
import { responsiveText, withIconStyles } from 'src/utils'
import { Edit } from 'src/Icons'

const EditBarContainer = styled.div(({ theme }) => css`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${theme.primaryColor};
  align-items: center;
  justify-content: space-between;
  ${responsiveText({
    min: 10,
    max: 12,
    minVw: 420,
    maxVw: 1200
  })}
`)

const EditBarItem = styled.div(({ theme }) => css`
  color: ${theme.defaultColorInverse};
  ${responsiveText({
    min: 10,
    max: 12,
    minVw: 420,
    maxVw: 1200
  })}
`)

const EditBarLeadItem = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
`)

const EditBarLabel = styled(EditBarItem)`
  padding-left: 20px;
`

const EditIcon = withIconStyles(Edit)`
  width: 15px;
  height: 15px;
  margin: 0 20px;

  path {
    fill: #fff;
  }
`

const EditBarActions = styled.div(({ theme }) => css`
  display: flex;
`)

const EditBarActionItem = styled(EditBarItem)`
  margin-right: 20px;
  cursor: pointer;
`

const Separator = styled.div(({ theme }) => css`
  height: 30px;
  width: 1px;
  background-color: ${theme.defaultColorInverse};
`)

const EditBar = ({
  onSaveClick,
  onCancelClick
}) => (
  <EditBarContainer>
    <EditBarLeadItem>
      <EditIcon />
      <Separator />
      <EditBarLabel>
        Edit Mode
      </EditBarLabel>
    </EditBarLeadItem>
    <EditBarActions>
      <EditBarActionItem onClick={onCancelClick}>
        Cancel
      </EditBarActionItem>
      <EditBarActionItem onClick={onSaveClick}>
        Save
      </EditBarActionItem>
    </EditBarActions>
  </EditBarContainer>
)

EditBar.propTypes = {
  onSaveClick: PropTypes.func,
  onCancelClick: PropTypes.func
}

EditBar.defaultProps = {
  onCancelClick: undefined,
  onSaveClick: undefined
}

export default EditBar
