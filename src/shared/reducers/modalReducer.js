import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.modal, action) {
  if (action.type == types.CHANGE_MODAL_OPEN) {
    return action.modal;
  } 
  return state;
}

