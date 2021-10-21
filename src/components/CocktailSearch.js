import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

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
  } = props;
  const { searchType, searchTerm, searchParams } = search

  const [searchByDropdownOpen, setSearchByDropdownOpen] = useState(false);
  const [alcoholContentDropdownOpen, setAlcoholContentDropdownOpen] = useState(false);
  const [glassTypeDropdownOpen, setGlassTypeDropdownOpen] = useState(false);

  const toggleSearchDropdown = (e) => setSearchByDropdownOpen(prevState => !prevState);
  const toggleAlcoholContentDropdown = () => setAlcoholContentDropdownOpen(prevState => !prevState);
  const toggleGlassTypeDropdown = () => setGlassTypeDropdownOpen(prevState => !prevState);

  const onSelectSearchType = (e) => {
    clearSearchFilters();
    setSearchType(e.target.value)
  }
  const onSearchTermChange = (e) => {
    clearSearchFilters();
    setSearchTerm(e.target.value)
  };
  const onSelectAlcoholContent = (e) => {
    clearSearchFilters();
    setSearchParams(searchType, e.target.value);
  };
  const onSelectGlassType = (e) => {
    clearSearchFilters();
    setSearchParams(searchType, e.target.value);
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
      <Dropdown isOpen={searchByDropdownOpen} toggle={toggleSearchDropdown}>
        <DropdownToggle caret>
          Search By
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={onSelectSearchType} value="name">Name</DropdownItem>
          <DropdownItem onClick={onSelectSearchType} value="ingredient">Ingredient</DropdownItem>
          <DropdownItem onClick={onSelectSearchType} value="alcoholContent">Alcohol Content</DropdownItem>
          <DropdownItem onClick={onSelectSearchType} value="glassType">Glass Type</DropdownItem>
          <DropdownItem onClick={onSelectSearchType} value="random">Random</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {
        searchType === "alcoholContent" ? (
          <Dropdown isOpen={alcoholContentDropdownOpen} toggle={toggleAlcoholContentDropdown}>
            <DropdownToggle caret>
              Alcohol Content
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={onSelectAlcoholContent} value="alcoholic">Alcoholic</DropdownItem>
              <DropdownItem onClick={onSelectAlcoholContent} value="non alcoholic">Non Alcoholic</DropdownItem>
              <DropdownItem onClick={onSelectAlcoholContent} value="optional alcohol">Optional Alcohol</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        ) : null
      }
      {
        searchType === "glassType" ? (
          <Dropdown isOpen={glassTypeDropdownOpen} toggle={toggleGlassTypeDropdown}>
            <DropdownToggle caret>
              Glass Type
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={onSelectGlassType} value="highball glass">Highball Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="cocktail glass">Cocktail Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="old-fashioned glass">Old-fashioned Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="whiskey glass">Whiskey Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="collins glass">Collins Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="pousse cafe glass">Pousse Cafe Glass</DropdownItem>
              <DropdownItem onClick={onSelectGlassType} value="champagne flute">Champagne Flute</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        ) : null
      }
      {
        searchType === "name" || searchType === "ingredient" ? (
          <InputGroup>
            <Input
              placeholder="enter search term"
              className="cocktail-search_input"
              onChange={onSearchTermChange}
            />
          </InputGroup>
        ) : null
      }
      {
        showSubmitButton() ? <Button color="primary" onClick={handleSearchSubmit}>Search</Button> : null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search
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