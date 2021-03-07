import { createStore } from 'redux'
import CakeReducer from './reducerCake'

const storeCake = createStore(CakeReducer)

export default storeCake
