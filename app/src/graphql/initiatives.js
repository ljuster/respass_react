import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { compose, pure } from 'recompose'

export const GET_INITIATIVES = graphql(gql`
  query Initiatives {
    initiatives {
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
`)

export const GET_ONE_INITIATIVE = graphql(gql`
  query Initiative ($id: ID!) {
      inititative (id: $id) {
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
  options: (props) => {
    console.log('---> props: ', props)
    return {
      variables: { id: props.id }
    }
  }
})

export const withData = data => compose(
  data,
  pure
)

export const withInitiativesData = withData(GET_INITIATIVES)
export const withOneInitiativeData = withData(GET_ONE_INITIATIVE)
