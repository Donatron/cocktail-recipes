import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import SearchTypeDropdown from './dropdowns/SearchTypeDropdown';
import AlcoholContentDropdown from './dropdowns/AlcoholContentDropdown';
import GlassTypeDropdown from './dropdowns/GlassTypeDropdown';
import ErrorMessage from './ErrorMessage';

import {
  searchCocktailsByName,
  searchCocktailsByIngredient,
  searchCocktailsByGlassType,
  searchCocktailsByAlcoholContent,
  fetchRandomCocktail,
  setSearchType,
  setSearchTerm,
  clearSearchTerm,
  setSearchParams,
  clearSearchParams
} from '../store/actions';

const CocktailSearch = (props) => {
  const {
    search,
    error,
    searchCocktailsByName,
    searchCocktailsByIngredient,
    searchCocktailsByGlassType,
    searchCocktailsByAlcoholContent,
    fetchRandomCocktail,
    setSearchTerm,
    clearSearchTerm,
    clearSearchParams
  } = props;
  const { searchType, searchTerm, searchParams } = search;

  const onSearchTermChange = (e) => {
    clearSearchFilters();
    setSearchTerm(e.target.value)
  };

  const handleSearchSubmit = () => {
    switch (searchType) {
      case "name":
        return searchCocktailsByName(searchTerm);
      case "ingredient":
        return searchCocktailsByIngredient(searchTerm);
      case "glassType":
        return searchCocktailsByGlassType(searchParams.glassType);
      case "alcoholContent":
        return searchCocktailsByAlcoholContent(searchParams.alcoholContent);
      case "random":
        return fetchRandomCocktail();
      default:
        return;
    }
  };

  const showSubmitButton = () => {
    const { glassType, alcoholContent } = searchParams
    if ((searchType === "name" || searchType === "ingredient") && (searchTerm !== null && searchTerm !== "")) return true;
    if (searchType === "alcoholContent" && alcoholContent !== null) return true;
    if (searchType === "glassType" && glassType !== null) return true;
    if (searchType === "random") return true;
  }

  const clearSearchFilters = () => {
    clearSearchTerm();
    clearSearchParams();
  }

  return (
    <div className="container cocktail-search">
      <h4>Search Cocktails</h4>
      <SearchTypeDropdown clearSearchFilters={clearSearchFilters} />
      {searchType === "alcoholContent" ? <AlcoholContentDropdown clearSearchFilters={clearSearchFilters} /> : null}
      {searchType === "glassType" ? <GlassTypeDropdown clearSearchFilters={clearSearchFilters} /> : null}
      {
        searchType === "name" || searchType === "ingredient" ? (
          <InputGroup>
            <Input
              placeholder="enter search term"
              className={`cocktail-search_input ${error.message && 'error'}`}
              onChange={onSearchTermChange}
            />
          </InputGroup>
        ) : null
      }
      {error.message ? <ErrorMessage message={error.message} /> : null}
      {
        showSubmitButton() ? <Button color="primary" onClick={handleSearchSubmit}>Search</Button> : null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  searchCocktailsByName,
  searchCocktailsByIngredient,
  searchCocktailsByGlassType,
  searchCocktailsByAlcoholContent,
  fetchRandomCocktail,
  setSearchType,
  setSearchTerm,
  clearSearchTerm,
  setSearchParams,
  clearSearchParams
})(CocktailSearch);