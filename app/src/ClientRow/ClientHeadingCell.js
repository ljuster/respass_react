import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { GridCell } from 'src/Grid'
import { Arrow } from 'src/Icons'
import Star from 'src/Star'
import { responsiveText, withToggle } from 'src/utils'

/* istanbul ignore next */
export const ClientCell = styled(GridCell)(props => css`
  display: flex;
  align-items: center;
`)

export const Container = styled(ClientCell)`
  cursor: pointer;
`

/* istanbul ignore next */
export const ClientLogo = styled.img(props => css`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 15px 10px 15px ${props.theme.tablePadding}px;
  background-color: #e1e1e1;
  border: solid 1px rgba(255, 255, 255, 0.25);
`)

/* istanbul ignore next */
export const ClientTitle = styled.div(props => css`
  font-family: ${props.theme.semiboldFont};
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
  ${responsiveText({
    min: 14,
    max: 16,
    minVw: 420,
    maxVw: 1200
  })}
`)

const TitleContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`

/* istanbul ignore next */
export const CampaignCount = styled.div(props => css`
  font-family: ${props.theme.regularFont};
  font-weight: 700;
  letter-spacing: 0;
  ${responsiveText({
    min: 10,
    max: 12,
    minVw: 420,
    maxVw: 1200
  })}
`)

/* istanbul ignore next */
export const ExpandArrow = styled(Arrow)(props => `
  position: relative;
  width: 30px;
  top: 4px;
  padding: 10px;
  margin-right: 5px;
  path { fill: ${props.theme.primaryColor}; }
  transform: ${props.isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: all 200ms ease-in-out;
`)

const TempStar = withToggle(Star)

const ClientHeadingCell = ({ isOpen, count, name, logo, onToggleOpen, children, ...restProps }) => (
  <Container sticky {...restProps}>
    <ClientLogo src={logo} onClick={onToggleOpen} />
    <TempStar />
    <span onClick={onToggleOpen}><ExpandArrow isOpen={isOpen} /></span>
    <TitleContainer onClick={onToggleOpen}>
      <ClientTitle>{name}</ClientTitle>
      <CampaignCount>{count !== undefined ? `${count} Total Campaigns` : '0 Campaigns'}</CampaignCount>
    </TitleContainer>
    {children}
  </Container>
)

ClientHeadingCell.propTypes = {
  isOpen: PropTypes.bool,
  logo: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  children: PropTypes.node,
  onToggleOpen: PropTypes.func
}

ClientHeadingCell.defaultProps = {
  isOpen: false,
  logo: undefined,
  name: undefined,
  count: undefined,
  children: undefined,
  onToggleOpen: undefined
}

export default ClientHeadingCell
