import { FETCH_RANDOM_COCKTAIL, FETCH_COCKTAILS } from '../actions';

const initialState = {
  isRandom: false,
  cocktails: {}
}

export default function (state = initialState, action) {
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
      })

      return {
        ...state,
        isRandom: false,
        cocktails: cocktailRecipes
      }
    default:
      return state;
  }
}