import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  loading: loadingReducer,
  cocktail: cocktailReducer,
  search: searchReducer,
  error: errorReducer
});