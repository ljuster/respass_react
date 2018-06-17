/**
 * This is an example of how we might remote connect data with a component using graphql. The plan
 * is to create a set of methods and HOCs that we can compose.
 */
import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars

export const Thing = ({ id, clientData = {} }) => {
  const { loading, error } = clientData
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return (
    <pre>{JSON.stringify(clientData, null, '  ')}</pre>
  )
}

Thing.propTypes = {
  id: PropTypes.string
}

Thing.defaultProps = {
  id: undefined
}

// gets all clients
export default Thing
