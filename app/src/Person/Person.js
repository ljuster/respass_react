/**
 * THIS IS FOR EXAMPLE PURPOSES ONLY
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRoutine } from 'src/fetch-routine'
import { GET_PERSON } from 'src/api-configs/person'
import { getPeopleSelector } from './Person.selectors'
import * as styles from './Person.css'

import Button from 'src/Button'

const Person = ({ remoteData, name, index, trigger }) => (
  <div css={styles.person}>
    <h5 css={styles.title} >Get {name}</h5>
    <Button option='primary' active={false} onClick={() => {
      trigger({ callType: GET_PERSON, index: index })
    }}>{`Fetch ${name}`}</Button>
    <pre css={styles.code}>{JSON.stringify(remoteData, null, '  ') || ''}</pre>
  </div>
)

Person.propTypes = {
  remoteData: PropTypes.object,
  name: PropTypes.string,
  index: PropTypes.number
}

Person.defaultProps = {
  remoteData: undefined,
  name: 'Luke',
  index: 1
}

const mapStateToProps = state => ({
  remoteData: getPeopleSelector(state)
})

const mapDispatchToProps = {
  trigger: fetchRoutine.trigger
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)
