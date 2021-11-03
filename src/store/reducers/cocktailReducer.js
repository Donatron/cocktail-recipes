import {
  FETCH_RANDOM_COCKTAIL,
  FETCH_COCKTAILS,
  FETCH_COCKTAIL,
  CLEAR_SELECTED_COCKTAIL,
  RESET_STATE,
} from '../actions';

const initialState = {
  isRandom: false,
  cocktails: {},
  selectedCocktail: null
}

export default function cocktailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_COCKTAIL:
      return {
        ...state,
        cocktails: {
          [action.payload.idDrink]: action.payload
        },
        isRandom: true
      }
    case FETCH_COCKTAILS:
      const cocktailRecipes = {}
      action.payload.map(cocktail => {
        return cocktailRecipes[cocktail.idDrink] = cocktail
      });

      return {
        ...state,
        isRandom: false,
        cocktails: cocktailRecipes
      }
    case FETCH_COCKTAIL:
      return {
        ...state,
        selectedCocktail: action.payload
      }
    case CLEAR_SELECTED_COCKTAIL:
      return {
        ...state,
        selectedCocktail: null
      }
    case RESET_STATE:
      return initialState
    default:
      return state;
  }
}