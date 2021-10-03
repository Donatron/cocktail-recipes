import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import CocktailSearch from './CocktailSearch'

class CocktailList extends Component {
  render() {
    return (
      <Container className="cocktail-list">
        <Row>
          <Col xs="12" md="6" className="cocktail-list_image">
            <div className="cocktail-list_image-image">
              <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="margarita" />
              <p>Margarita</p>
              <Link to="/details" className="btn btn-primary">Recipe</Link>

            </div>
          </Col>
          <Col xs="12" md="6" className="cocktail-list_details">
            <CocktailSearch />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CocktailList;