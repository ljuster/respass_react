import React from 'react'
import styled from 'react-emotion'

import Header from 'src/Header'
import { PanelFill } from 'src/Layout'

import ToolBar from 'src/ToolBar'
import ActionBar from 'src/ActionBar'
import MainContent from './MainContent'
import { DashboardTable } from 'src/Table'

import ErrorBoundary from 'src/ErrorBoundary'

// entities as would be in the store
import clients from 'src/Table/data-clients'
import initiatives from 'src/Table/data-initiatives'
import groups from 'src/Table/data-groups'
import passes from 'src/Table/data-passes'

/* istanbul ignore next */
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`

// const ContentArea = styled(PanelFill.withComponent('div'))` // same thing but can change the element type of PanelFill
/* istanbul ignore next */
const ContentArea = styled(PanelFill)`
  height: calc(100% - 70px);
`

export const App = () => (
  <AppWrapper>
    <Header />
    <ErrorBoundary>
      <ContentArea>
        <ToolBar />
        <ActionBar />
        <MainContent>
          <DashboardTable
            clients={clients}
            initiatives={initiatives}
            groups={groups}
            passes={passes}
          />
        </MainContent>
      </ContentArea>
    </ErrorBoundary>
  </AppWrapper>
)

export default App
