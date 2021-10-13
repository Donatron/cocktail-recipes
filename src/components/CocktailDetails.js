import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import CocktailIngredient from './CocktailIngredient';
import CocktailInstructions from './CocktailInstructions';
import CocktailAlternatives from './CocktailAlternatives';
import CocktailGlassType from './CocktailGlassType';

class CocktailDetails extends Component {
  constructor() {
    super();

    this.renderIngredients = this.renderIngredients.bind(this);
  }

  renderIngredients = (selectedCocktail) => {
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
    const { cocktail } = this.props;
    const { id } = this.props.match.params;

    const selectedCocktail = cocktail.cocktails[id];

    return (
      <Container className="cocktail-details">
        <Row>
          <Col md="6" xs="12" className="cocktail-details_image">
            {<div className="cocktail-details_image-image">
              <img src={`${selectedCocktail.strDrinkThumb}`} alt="margarita" />
            </div>}
          </Col>
          <Col md="6" xs="12" className="cocktail-details_details">
            <Row>
              <h4>Ingredients</h4>
              {this.renderIngredients(selectedCocktail)}
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

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps)(CocktailDetails);