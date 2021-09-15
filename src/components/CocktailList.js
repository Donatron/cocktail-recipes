import React, { Component } from 'react';
import { Button } from 'reactstrap';

import CocktailSearch from './CocktailSearch'

class CocktailList extends Component {
  render() {
    return (
      <div className="container cocktail-list">
        <div className="col-12 col-md-6 cocktail-list_image">
          <div className="cocktail-list_image-image">
            <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="margarita" />
            <p class="some-class">Margarita</p>
            <Button color="primary">Recipe</Button>
          </div>
        </div>
        <div className="col-12 col-md-6 cocktail-list_details">
          <CocktailSearch />
        </div>
      </div>
    )
  }
}

export default CocktailList;