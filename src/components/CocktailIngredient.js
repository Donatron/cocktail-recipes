import React from 'react';
import { Col } from 'reactstrap';

const CocktailIngredient = ({ ingredient }) => {
  return (
    <Col xs="6" md="3" className="cocktail-details_details-ingredients_ingredient">
      <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}.png`} alt={`${ingredient.name}`} />
      <p>{ingredient.name}</p>
      <p>{ingredient.measure}</p>
    </Col>
  );
}

export default CocktailIngredient;