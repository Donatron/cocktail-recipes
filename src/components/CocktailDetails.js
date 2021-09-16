import React from 'react';

import CocktailSearch from './CocktailSearch';

const CocktailDetails = () => {

  return (
    <div className="container cocktail-list">
      <div className="col-xs-12 col-md-6 cocktail-list_image">
        <div className="cocktail-list_image-image">
          <img src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="margarita" className="img-fluid" />
        </div>
      </div>
      <div className="col-xs-12 col-md-6 cocktail-details_details">
        <div className="row cocktail-details_details-ingredients">
          <h4>Ingredients</h4>
          <div className="col-xs-6 col-md-3 cocktail-details_details-ingredients_ingredient">
            <img src="https://www.thecocktaildb.com/images/ingredients/tequila.png" alt="tequila" />
            Tequila
          </div>
          <div className="col-xs-6 col-md-3 cocktail-details_details-ingredients_ingredient">
            <img src="https://www.thecocktaildb.com/images/ingredients/Triple sec.png" alt="triple sec" />
            Triple Sec
          </div>
          <div className="col-xs-6 col-md-3 cocktail-details_details-ingredients_ingredient">
            <img src="https://www.thecocktaildb.com/images/ingredients/Lime juice.png" alt="lime juice" />
            Lime Juice
          </div>
          <div className="col-xs-6 col-md-3 cocktail-details_details-ingredients_ingredient">
            <img src="https://www.thecocktaildb.com/images/ingredients/Salt.png" alt="Salt" />
            Salt
          </div>
        </div>
        <div className="row">
          <div className="row cocktail-details_details-instructions">
            <h4>Instructions</h4>
            <div className="">
              <p>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row cocktail-details_details-glass">
            <h4>Glass Type</h4>
            <div className="">
              <p>Cocktail glass</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row cocktail-details_details-alternatives">
            <h4>Alternatives</h4>
            <div className="">
              <p>Alternative 1, Alternative 2, Alternative 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailDetails;