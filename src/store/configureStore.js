import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
export default function () {
  return configureStore({
    reducer,
    middleware: [logger],
  });
}

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//import { createStore } from 'redux';  -- no longer needed when using redux toolkit
//import { devToolsEnhancer } from 'redux-devtools-extension';

//devToolsEnhancer({ trace: true }) //returns a store enhancer funciton
