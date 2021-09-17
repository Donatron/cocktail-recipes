import React from 'react';

const CocktailGlassType = ({ glassType }) => {
  return (
    <div className="row cocktail-details_details-glass">
      <h4>Glass Type</h4>
      <div className="">
        <p>{glassType}</p>
      </div>
    </div>
  );
}

export default CocktailGlassType;