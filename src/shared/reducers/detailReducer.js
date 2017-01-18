import * as types from '../actions/actionTypes';
import initialState from './initialState';

import { combineReducers } from 'redux';

function detailsReducer(state = initialState.details, action) {
  switch (action.type) {
    case types.LOAD_DETAILS_SUCCESS:
      return action.details;
    default:
      return state;
  }
}


export default detailsReducer;

