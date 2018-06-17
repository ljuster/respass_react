import React from 'react'
import styled, { css } from 'react-emotion'
import PropTypes from 'prop-types'
import { responsiveText } from 'src/utils'

const SummaryBarContainer = styled.div(({ theme }) => css`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${theme.defaultColor};
  align-items: center;
`)

const SummaryBarItem = styled.div(({ theme }) => css`
  color: ${theme.defaultColorInverse};
`)

const SummaryBarLeadItem = styled(SummaryBarItem)`
  padding-left: 20px;
  min-width: 430px;
  ${responsiveText({
    min: 10,
    max: 12,
    minVw: 420,
    maxVw: 1200
  })}
`
const SummaryBarInfoItem = styled(SummaryBarItem)`
  min-width: 125px;
  padding: 0 20px;
  ${responsiveText({
    min: 8,
    max: 10,
    minVw: 420,
    maxVw: 1200
  })}

  span {
    ${responsiveText({
    min: 6,
    max: 8,
    minVw: 420,
    maxVw: 1200
  })}
  }
`

const SummaryBarSpendNetBudgetItem = styled(SummaryBarInfoItem)`
  padding-left: 180px;
`

const SummaryBarSpendPerDayItem = styled(SummaryBarInfoItem)`
  padding-left: 20px;
`

const SummaryBarNetBudgetItem = styled(SummaryBarInfoItem)`
  padding-left: 400px;
`

const SummaryBarGrossBudgetItem = styled(SummaryBarInfoItem)`
  padding-left: 80px;
`

const SummaryBar = ({
  summaryItems,
  spendSoFar,
  netBudget,
  spendPerDay,
  grossBudget
}) => (
  <SummaryBarContainer>
    <SummaryBarLeadItem>
      {`Summary for ${summaryItems > 1 ? `${summaryItems} Items` : '1 Item'}`}
    </SummaryBarLeadItem>
    <SummaryBarSpendNetBudgetItem>
      {spendSoFar}
      <br />
      <span>
        {netBudget}
      </span>
    </SummaryBarSpendNetBudgetItem>
    <SummaryBarSpendPerDayItem>
      {spendPerDay}
      <br />
      <span>Per Day</span>
    </SummaryBarSpendPerDayItem>
    <SummaryBarNetBudgetItem>
      {netBudget}
    </SummaryBarNetBudgetItem>
    <SummaryBarGrossBudgetItem>
      {grossBudget}
    </SummaryBarGrossBudgetItem>
  </SummaryBarContainer>
)

SummaryBar.propTypes = {
  summaryItems: PropTypes.string,
  spendSoFar: PropTypes.string,
  netBudget: PropTypes.string,
  spendPerDay: PropTypes.string,
  grossBudget: PropTypes.string
}

SummaryBar.defaultProps = {
  summaryItems: '$0',
  spendSoFar: '$0',
  netBudget: '$0',
  spendPerDay: '$0',
  grossBudget: '$0'
}

export default SummaryBar
