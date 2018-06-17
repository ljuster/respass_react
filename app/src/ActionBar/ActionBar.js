import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import Link, { PRIMARY_LINK, SMALL_LINK } from 'src/Link'

/* istanbul ignore next */
export const ActionBarContainer = styled.div(props => css`
  position: relative;
  display: flex;
  min-height: ${props.theme.actionBarHeight}px;
  background-color: ${props.theme.grayLight};
  border-top: solid 1px ${props.theme.grayDark};
`)

/* istanbul ignore next */
export const Section = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  padding-left: 20px;
  &:not(:last-child):after {
    content: '';
    position: relative;
    width: 1px;
    height: calc(100% - 20px);
    margin-left: 20px;
    background-color: ${theme.gray8};
  }
`)

/* istanbul ignore next */
const ActionLink = styled(Link)(props => css`
  margin-right: 20px;
  font-family: ${props.theme.semiboldFont}
`)

const ActionBar = () => (
  <ActionBarContainer>
    <Section>
      <ActionLink option={PRIMARY_LINK} size={SMALL_LINK}>Edit Mode</ActionLink>
      <ActionLink option={PRIMARY_LINK} size={SMALL_LINK}>Group</ActionLink>
      <ActionLink option={PRIMARY_LINK} size={SMALL_LINK}>Duplicate</ActionLink>
      <ActionLink option={PRIMARY_LINK} size={SMALL_LINK}>Archive</ActionLink>
    </Section>
  </ActionBarContainer>
)

export default ActionBar
