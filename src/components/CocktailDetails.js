import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { fetchCocktailById, clearError, clearSelectedCocktail } from '../store/actions'
import CocktailIngredient from './CocktailIngredient';
import CocktailInstructions from './CocktailInstructions';
import CocktailAlternatives from './CocktailAlternatives';
import CocktailGlassType from './CocktailGlassType';
import LoadingSpinner from './LoadingSpinner';

class CocktailDetails extends Component {
  constructor() {
    super();

    this.renderIngredients = this.renderIngredients.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCocktailById(id);
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

  resetError = () => {
    this.props.clearError()
    this.props.clearSelectedCocktail();
  }

  render() {
    const { cocktail, error, loading } = this.props;
    const { selectedCocktail } = cocktail;

    if (loading) return <LoadingSpinner />

    return selectedCocktail && !error.message ? (
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
    ) : error.message && <Container className="cocktail-details">
      <Row>
        <Col xs={12}>
          {error.message}
        </Col>
        <Col xs={12}>
          <Link to="/" onClick={this.resetError}>Go Back</Link>
        </Col>
      </Row>
    </Container>
  }
}

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCocktailById, clearError, clearSelectedCocktail })(CocktailDetails);