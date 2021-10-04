import React from 'react';
import { Container, Row, Col } from 'reactstrap';


import dummyData from '../data/dummyData.json';

const CocktailSearchResults = () => {

  const renderSearchResults = (results) => {
    return results.drinks.map(result => {
      return <Col xs={12} md={3}>
        <img src={`${result.strDrinkThumb}`} alt={`${result.strDrink}`} style={{ height: "180px" }} />
        <p>{result.strDrink}</p>
      </Col>
    });
  }

  return (
    <Container Container className="cocktail-search-results">
      <Row>
        {renderSearchResults(dummyData)}
      </Row>
    </Container >
  );
}

export default CocktailSearchResults;