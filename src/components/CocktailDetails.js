import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
        const ingredient = {};
        ingredient.name = selectedCocktail[`strIngredient${i}`];
        ingredient.measure = selectedCocktail[`strMeasure${i}`];

        ingredients.push(ingredient);
      }
    }

    return ingredients.map((ingredient, i) => {
      return <CocktailIngredient ingredient={ingredient} key={i} />
    })
  }

  render() {
    return (
      <Container className="cocktail-details">
        <Row>
          <Col md="6" xs="12" className="cocktail-details_image">
            {<div className="cocktail-details_image-image">
              <img src={`${selectedCocktail.strDrinkThumb}`} alt="margarita" />
              <p>{selectedCocktail.strDrink}</p>
            </div>}
          </Col>
          <Col md="6" xs="12" className="cocktail-details_details">
            <Row>
              <h4>Ingredients</h4>
              {this.renderIngredients()}
            </Row>
            <CocktailInstructions instructions={selectedCocktail.strInstructions} />
            <CocktailGlassType glassType={selectedCocktail.strGlass} />
            {
              selectedCocktail.strDrinkAlternate ? <CocktailAlternatives alternatives={selectedCocktail.strDrinkAlternate} /> : null
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CocktailDetails