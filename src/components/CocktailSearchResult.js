import React from 'react';
import { Col } from 'reactstrap';

const CocktailSearchResult = ({ searchResult }) => {
  return (
    <Col xs={12} md={4} lg={3} className="cocktail-search-results_result" >
      <img src={`${searchResult.strDrinkThumb}`} alt={`${searchResult.strDrink}`} />
      <p>{searchResult.strDrink}</p>
    </Col>
  );
}

export default CocktailSearchResult;