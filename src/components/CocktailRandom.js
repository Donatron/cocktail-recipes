import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap'

import CocktailSearch from './CocktailSearch'

const CocktailRandom = ({ cocktail }) => {
  const cocktailId = Object.keys(cocktail)[0];

  return (
    <Row>
      <Col xs="12" md="6" className="cocktail-list_image">
        <div className="cocktail-list_image-image">
          <img src={`${cocktail[cocktailId].strDrinkThumb}`} alt="margarita" />
          <p>{cocktail[cocktailId].strDrink}</p>
          <Link to={{ pathname: `details/${cocktailId}`, state: 'flushDeal' }} className="btn btn-primary" onClick={() => console.log('trying new method on link')}>Recipe</Link>

        </div>
      </Col>
      <Col xs="12" md="6" className="cocktail-list_details">
        <CocktailSearch />
      </Col>
    </Row>
  )
}

export default CocktailRandom;