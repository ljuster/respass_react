import { fromJS } from 'immutable'
const defaultLogo = 'https://placeimg.com/60/60/animals/sepia'

export default fromJS({
  client_0: {
    id: 'client_0',
    name: 'Client Nada',
    initiatives: ['initiative_0', 'initiative_1', 'initiative_2'],
    logo: defaultLogo
  },
  client_1: {
    id: 'client_1',
    name: 'Client Uno',
    initiatives: ['initiative_3'],
    logo: defaultLogo
  }
})
