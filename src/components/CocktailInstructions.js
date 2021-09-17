import React from 'react';

const CocktailInstructions = ({ instructions }) => {
  return (
    <div className="row cocktail-details_details-instructions">
      <h4>Instructions</h4>
      <div className="">
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default CocktailInstructions;