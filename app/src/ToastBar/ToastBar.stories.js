/* istanbul ignore file */

import React from 'react'
import { storiesOf } from '@storybook/react'
import FillWindowContainer from 'storybook-utils/FillWindowContainer'
import styled from 'react-emotion'
import { withToggle, centsToDollars } from 'src/utils'
import ToastBar from './ToastBar'
import SummaryBar from 'src/SummaryBar'
import EditBar from 'src/EditBar'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

import Button, { PRIMARY_BUTTON } from 'src/Button'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
`

// ToastBar Presenter component
const ToastBarPresenter = ({
  children,
  buttonlabel,
  // from recompose withToggle
  toggledOn,
  toggle,
  hide
}) => (
  <FillWindowContainer>
    <Item>
      <Button
        option={PRIMARY_BUTTON}
        onClick={toggle}
      >
        {buttonlabel}
      </Button>
    </Item>
    <ToastBar minHeight='50px' isOpen={toggledOn}>
      {children({ hide })}
    </ToastBar>
  </FillWindowContainer>
)

const SumaryRowPresenterWrapper = withToggle(ToastBarPresenter)
const EditBarPresenterWrapper = withToggle(ToastBarPresenter)
storiesOf('ToastBar', module)
  .add(
    'Summary Toastbar',
    withNotes(NOTES)(
      () => (
        <SumaryRowPresenterWrapper buttonlabel={'Toggle Summary Row'}>
          {() => (
            <SummaryBar
              summaryItems={3}
              spendSoFar={centsToDollars(2944190)}
              netBudget={centsToDollars(69800000)}
              spendPerDay={centsToDollars(2674233)}
              grossBudget={centsToDollars(76780000)}
            />
          )}
        </SumaryRowPresenterWrapper>
      )
    )
  )
  .add(
    'Edit Toastbar',
    withNotes(NOTES)(
      () => (
        <EditBarPresenterWrapper buttonlabel={'Toggle Edit Row'}>
          {({ hide }) => (
            <EditBar
              onCancelClick={hide}
              onSaveClick={hide}
            />
          )}
        </EditBarPresenterWrapper>
      )
    )
  )
