import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import PageTitle from './pageTitle';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <FontAwesomeIcon icon={faCocktail} /></Link>
      <h1>Cocktail Recipes</h1>
      <PageTitle />
    </div>
  );
}

export default Header;