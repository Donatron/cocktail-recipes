import axios from 'axios';

export const DATA_LOADING = 'DATA_LOADING';
export const FETCH_RANDOM_COCKTAIL = 'FETCH_RANDOM_COCKTAIL';

const ROOT_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchRandomCocktail = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/random.php`);

  dispatch({
    type: DATA_LOADING
  });

  dispatch({
    type: FETCH_RANDOM_COCKTAIL,
    payload: response.data.drinks[0]
  });

  dispatch({
    type: DATA_LOADING
  });
}

export const dataLoading = () => {
  return {
    type: DATA_LOADING
  }
}