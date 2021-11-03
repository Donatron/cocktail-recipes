import { DATA_LOADING } from '../actions';

const initialState = false;

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return !state
    default:
      return state
  }
}