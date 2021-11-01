import {
  SET_SEARCH_TYPE,
  SET_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SET_SEARCH_PARAMS,
  CLEAR_SEARCH_PARAMS,
  RESET_STATE
} from '../actions'

const initialState = {
  searchType: null,
  searchTerm: null,
  searchParams: {
    glassType: null,
    alcoholContent: null
  }
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload
      }
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    case CLEAR_SEARCH_TERM:
      return {
        ...state,
        searchTerm: null
      }
    case SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          [action.searchType]: action.payload
        }
      }
    case CLEAR_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: {
          ...initialState.searchParams
        }
      }
    case RESET_STATE:
      return initialState
    default:
      return state;
  }
}