import { configureStore, combineReducers, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import userReducer from '../reducers/userReducer';
import logedReducer from '../features/login/logedSlice'
import storage from 'reduxjs-toolkit-persist/lib/storage';


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
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  })
})
