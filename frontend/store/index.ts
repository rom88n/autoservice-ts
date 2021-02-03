import { createStore, applyMiddleware } from 'redux'
import { combinedReducers } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  blacklist: ['form'],
  key: 'reactreduxform',
  storage
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(
  persistedReducer,
  process.browser ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
)

// @ts-ignore
const persistor = persistStore(store);

export { store, persistor }


// export { store }

// import { RootState } from "./reducers"
// import RootState, { State as RootState } from './reducers'

// import { applyMiddleware, createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from 'redux-thunk'
// import { combinedReducers, RootState } from "./reducers"
//
//
// export function configureStore(initialState?: RootState) {
//   const store = createStore(
//     combinedReducers,
//     initialState,
//     process.browser ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
//   )
//   return store
// }
