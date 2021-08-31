import React from 'react'
import {applyMiddleware,createStore} from "redux"
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {rootReducer} from './rootReducer';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  storage,
}

export const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(logger)))
export const persistor=persistStore(store)
 
// export default () => {
//   let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(logger)))
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// export default store; 