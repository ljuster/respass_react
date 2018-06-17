import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import Button, { PRIMARY_BUTTON } from 'src/Button'

/* istanbul ignore next */
export const Tools = styled.div(props => css`
  position: relative;
  display: flex;
  min-height: ${props.theme.toolbarHeight}px;
  padding: 0 10px;
`)

/* istanbul ignore next */
export const CreateClientButton = styled(Button)(props => `
  width: 163px;
  height: 30px;
  padding-bottom: 4px;
  font-family: ${props.theme.regularFont};
`)

/* istanbul ignore next */
export const Section = styled.div(props => `
  display: flex;
  align-items: center;
  &:not(:first-child) {
    padding-left: 20px;
  }
  &:not(:last-child):after {
    content: '';
    position: relative;
    width: 1px;
    height: calc(100% - 20px);
    margin-left: 20px;
    background-color: ${props.theme.gray8};
  }
`)

/* istanbul ignore next */
const Search = styled.input`
  height: 30px;
`

const ToolBar = () => (
  <Tools>
    <Section>
      <CreateClientButton option={PRIMARY_BUTTON}>
        Create a Client
      </CreateClientButton>
    </Section>
    <Section>
      <Search type='text' />
    </Section>
  </Tools>
)

export default ToolBar
