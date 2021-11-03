import React from 'react';
import { Container, Row } from 'reactstrap';

import CocktailSearchResult from './CocktailSearchResult'

const CocktailSearchResults = ({ cocktails }) => {

  const renderSearchResults = () => {
    const searchResults = []
    for (const cocktail in cocktails) {
      searchResults.push(cocktail);
    }

    return searchResults.map(searchResult => <CocktailSearchResult searchResult={cocktails[searchResult]} key={cocktails[searchResult].idDrink} />);
  }

  return (
    <Container className="cocktail-search-results">
      <Row>
        {renderSearchResults()}
      </Row>
    </Container >
  );
}

export default CocktailSearchResults;