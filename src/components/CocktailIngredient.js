import React from 'react';

const CocktailIngredient = ({ ingredient }) => {
  return (
    <div className="col-xs-6 col-md-3 cocktail-details_details-ingredients_ingredient">
      <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}.png`} alt={`${ingredient.name}`} />
      <p>{ingredient.name}</p>
      <p>{ingredient.measure}</p>
    </div>
  );
}

export default CocktailIngredient;