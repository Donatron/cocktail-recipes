import axios from 'axios';

export const DATA_LOADING = 'DATA_LOADING';
export const FETCH_RANDOM_COCKTAIL = 'FETCH_RANDOM_COCKTAIL';
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_COCKTAIL = 'FETCH_COCKTAIL';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const CLEAR_SEARCH_PARAMS = 'CLEAR_SEARCH_PARAMS';


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

export const fetchCocktailById = (id) => async (dispatch) => {
  dispatch({
    type: DATA_LOADING
  });

  const response = await await axios.get(`${ROOT_URL}/lookup.php?i=${id}`);

  dispatch({
    type: FETCH_COCKTAIL,
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

export const setSearchType = (searchType) => {
  return {
    type: SET_SEARCH_TYPE,
    payload: searchType
  }
}

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  }
}

export const setSearchParams = (searchType, value) => {
  return {
    type: SET_SEARCH_PARAMS,
    searchType: searchType,
    payload: value
  }
}

export const clearSearchParams = () => {
  return {
    type: CLEAR_SEARCH_PARAMS
  }
}

export const clearSearchTerm = (searchTerm) => {
  return {
    type: CLEAR_SEARCH_TERM
  }
}

export const dataLoading = () => {
  return {
    type: DATA_LOADING
  }
}