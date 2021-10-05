import React from 'react';
import { Col } from 'reactstrap';

const CocktailSearchResult = ({ searchResult }) => {
  return (
    <Col xs={12} md={3}>
      <img src={`${searchResult.strDrinkThumb}`} alt={`${searchResult.strDrink}`} style={{ height: "180px" }} />
      <p>{searchResult.strDrink}</p>
    </Col>
  );
}

export default CocktailSearchResult;