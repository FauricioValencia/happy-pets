import { get } from 'lodash'

const createPetsSelector = path => state => get(state, ['pets', path])

export const getPetList = createPetsSelector('petList')
export const getPetSelected = createPetsSelector('petSelected')

export default { getPetList, getPetSelected }
