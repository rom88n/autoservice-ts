import { createStore, combineReducers, applyMiddleware } from 'redux'
import session, { State as SessionState } from './reducers'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

export interface RootState {
  session: SessionState
}

const persistConfig = {
  blacklist: ['form'],
  key: 'reactreduxform',
  storage
};


const persistedReducer = persistReducer(persistConfig, combineReducers<RootState>({ session }));

const store = createStore(persistedReducer, applyMiddleware(thunk))

const persistor = persistStore(store);

export { store, persistor }
