import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../reducers/userReducer';
import logedReducer from '../features/login/logedSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig= {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  loged: logedReducer,
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
  reducer: persistedReducer
});
