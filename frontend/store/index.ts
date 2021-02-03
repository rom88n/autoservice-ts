import { createStore, applyMiddleware } from 'redux'
import { combinedReducers } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  blacklist: ['application'],
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
