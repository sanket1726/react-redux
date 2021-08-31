import {combineReducers} from 'redux'
import cakeReducer from './reducer/cake/cakeReducer'
import {iceCreamReducer} from './reducer/icecream/iceCreamReducer'


export const rootReducer=combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})