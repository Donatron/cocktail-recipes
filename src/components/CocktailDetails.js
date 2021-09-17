import React, { Component } from 'react';

import CocktailIngredient from './CocktailIngredient';
import CocktailInstructions from './CocktailInstructions';
import CocktailAlternatives from './CocktailAlternatives';

// ! DUMMY DATA TO BE REMOVED AND REPLACED WITH API CALL
import dummyData from '../data/dummyData.json';
import CocktailGlassType from './CocktailGlassType';

const selectedCocktail = dummyData.drinks.filter(cocktail => {
  return cocktail.idDrink == 11007;
})[0];

class CocktailDetails extends Component {
  constructor() {
    super();

    this.renderIngredients = this.renderIngredients.bind(this);
  }

  renderIngredients = () => {
    let ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (selectedCocktail[`strIngredient${i}`]) {
        ingredients.push(selectedCocktail[`strIngredient${i}`]);
      }
    }

    return ingredients.map((ingredient, i) => {
      return <CocktailIngredient ingredient={ingredient} key={i} />
    })
  }
  render() {
    return (
      <div className="container cocktail-list">
        <div className="col-xs-12 col-md-6 cocktail-list_image">
          <div className="cocktail-list_image-image">
            <img src={`${selectedCocktail.strDrinkThumb}`} alt="margarita" className="img-fluid" />
            <p>{selectedCocktail.strDrink}</p>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 cocktail-details_details">
          <div className="row cocktail-details_details-ingredients">
            <h4>Ingredients</h4>
            {this.renderIngredients()}
          </div>
          <CocktailInstructions instructions={selectedCocktail.strInstructions} />
          <CocktailGlassType glassType={selectedCocktail.strGlass} />
          {
            selectedCocktail.strDrinkAlternate ? <CocktailAlternatives alternatives={selectedCocktail.strDrinkAlternate} /> : null
          }
        </div>
      </div>
    );
  }
}

export default CocktailDetails;