import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../reducers/userReducer';
import logedRuder from '../features/login/logedSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    loged: logedRuder
  },
});
