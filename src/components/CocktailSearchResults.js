import React from 'react';
import { Container, Row } from 'reactstrap';

import CocktailSearchResult from './CocktailSearchResult'

import dummyData from '../data/dummyData.json';

const CocktailSearchResults = () => {

  const renderSearchResults = (searchResults) => {
    return searchResults.drinks.map(searchResult => {
      return <CocktailSearchResult searchResult={searchResult} />
    });
  }

  return (
    <Container className="cocktail-search-results">
      <Row>
        {renderSearchResults(dummyData)}
      </Row>
    </Container >
  );
}

export default CocktailSearchResults;