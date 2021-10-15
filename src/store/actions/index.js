import axios from 'axios';

export const DATA_LOADING = 'DATA_LOADING';
export const FETCH_RANDOM_COCKTAIL = 'FETCH_RANDOM_COCKTAIL';
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';

const ROOT_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchRandomCocktail = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/random.php`);

  dispatch({
    type: FETCH_RANDOM_COCKTAIL,
    payload: response.data.drinks[0]
  });

  dispatch({
    type: DATA_LOADING
  });
}

export const searchCocktailsByName = (name) => async (dispatch) => {
  dispatch({
    type: DATA_LOADING
  });

  const response = await axios.get(`${ROOT_URL}/search.php?s=${name}`);

  dispatch({
    type: FETCH_COCKTAILS,
    payload: response.data.drinks
  });

  dispatch({
    type: DATA_LOADING
  });
}

export const searchCocktailsByIngredient = (ingredient) => async (dispatch) => {
  dispatch({
    type: DATA_LOADING
  });

  const response = await axios.get(`${ROOT_URL}/filter.php?i=${ingredient}`);

  dispatch({
    type: FETCH_COCKTAILS,
    payload: response.data.drinks
  });

  dispatch({
    type: DATA_LOADING
  });
}

export const searchCocktailsByGlassType = (glassType) => async (dispatch) => {
  dispatch({
    type: DATA_LOADING
  });

  const response = await axios.get(`${ROOT_URL}/filter.php?g=${glassType}`);

  dispatch({
    type: FETCH_COCKTAILS,
    payload: response.data.drinks
  });

  dispatch({
    type: DATA_LOADING
  });
}

export const searchCocktailsByAlcoholContent = (alcoholContent) => async (dispatch) => {
  dispatch({
    type: DATA_LOADING
  });

  const response = await axios.get(`${ROOT_URL}/filter.php?a=${alcoholContent}`);

  dispatch({
    type: FETCH_COCKTAILS,
    payload: response.data.drinks
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