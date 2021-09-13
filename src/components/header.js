import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faCocktail} />
      <h1>Cocktail Recipes</h1>
    </div>
  );
}

export default Header;