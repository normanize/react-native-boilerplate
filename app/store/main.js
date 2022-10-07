import { createStore, combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce'

import {
    appConfigReducer,
} from 'app/store/reducers';

export const initStore = () => {
  // configure reset reducer
  const resettable = resettableReducer('RESET')

  /***** REDUCERS *****/
  const reducers = combineReducers({
    appConfig: appConfigReducer, // -> not resettable
  });

  /***** STORE *****/
  const store = createStore(reducers, undefined);

  return store;
};