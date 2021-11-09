import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const CocktailSearchResult = ({ searchResult }) => {
  return (
    <Col xs={12} md={6} lg={3} className="cocktail-search-results_result">
      <Link to={`/details/${searchResult.idDrink}`}>
        <img src={`${searchResult.strDrinkThumb}`} alt={`${searchResult.strDrink}`} />
        <p>{searchResult.strDrink}</p>
      </Link>
    </Col>
  );
}

export default CocktailSearchResult;