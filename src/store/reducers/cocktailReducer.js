import { FETCH_RANDOM_COCKTAIL } from '../actions';

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
    default:
      return state;
  }
}