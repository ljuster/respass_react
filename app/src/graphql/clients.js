import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { compose, pure } from 'recompose'

export const GET_CLIENTS = graphql(gql`
  query Clients {
    clients {
      id
      name
      logoUrl
      hyfn8BrandId
      budgetGroups {
        id
      }
      initiatives {
        id
      }
    }
  }
`, {
  name: 'clientData'
})

export const GET_CLIENT_INITIATIVES = graphql(gql`
  query Client ($id: ID!) {
      client (id: $id) {
        initiatives {
          id
          name
          notes
          clientId
          feePercent
          budgetGroups {
            id
          }
        }
      }
    }
  `,
{
  // The variable $id for the query is computed from the
  // React props passed to this container.
  options: (props) => ({
    variables: { id: props.id }
  }),
  name: 'clientInitiativesData'
})

export const withData = query => compose(
  query,
  pure
)

export const withClientsData = withData(GET_CLIENTS)
export const withClientInitiativesData = withData(GET_CLIENT_INITIATIVES)
