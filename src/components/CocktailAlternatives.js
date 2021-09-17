import React from 'react';

const CocktailAlternatives = ({ alternatives }) => {
  return (
    <div className="row">
      <div className="row cocktail-details_details-alternatives">
        <h4>Alternatives</h4>
        <div className="">
          <p>{alternatives}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailAlternatives;