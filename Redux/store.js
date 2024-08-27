
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers';

const rootReducer = {
  theme: themeReducer, 
};

export const Store = configureStore({
  reducer: rootReducer,

});
