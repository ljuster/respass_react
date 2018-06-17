/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import ErrorBoundary from './ErrorBoundary'
import FillWindowContainer from 'storybook-utils/FillWindowContainer'
import DemoContainer from 'storybook-utils/DemoContainer'
import NOTES from './README.md'
import customErrorNotes from './custom-error.md'
import { withNotes } from '@storybook/addon-notes'

const ThrowErrorComponent = () => {
  throw new Error(`throw an error!`)
}

const FakeComponentContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;
  border: solid 1px #333;
  border-radius: 8px;
`

storiesOf('ErrorBoundary', module)
  .add(
    'Default Error Message',
    withNotes(NOTES)(
      () => (
        <FillWindowContainer>
          <ErrorBoundary>
            <ThrowErrorComponent />
          </ErrorBoundary>
        </FillWindowContainer>
      )
    )
  )

  .add(
    'Custom Error Message',
    withNotes(customErrorNotes)(
      () => (
        <DemoContainer>
          <FakeComponentContainer>
            <h6 style={{ display: 'inline-block' }}>Address Book</h6>
            <span style={{ cursor: 'pointer', fontSize: '35px', position: 'absolute', right: '27px', top: '5px' }}>+</span>
            <hr style={{ margin: '5px 0 15px' }} />
            <ErrorBoundary render={({ error, errorInfo }) => (
              <div style={{ height: '100%' }}>
                <h1>😩</h1>
                <h3>We cannot find the address book you are looking for.</h3>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  <div style={{ height: '150px', overflowY: 'scroll' }}>
                    <strong>{error && error.toString()}</strong>
                    <br />
                    {errorInfo.componentStack}
                  </div>
                </details>
              </div>
            )}>
              <ThrowErrorComponent />
            </ErrorBoundary>
          </FakeComponentContainer>
        </DemoContainer>
      )
    )
  )
