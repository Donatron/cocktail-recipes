import { DATA_LOADING } from '../actions';

const initialState = true;

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return !state
    default:
      return state
  }
}