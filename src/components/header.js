import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import PageTitle from './pageTitle';

import { clearSelectedCocktail } from '../store/actions'

const Header = (props) => {
  const { clearSelectedCocktail } = props;

  const handleReturnHome = () => {
    clearSelectedCocktail();
  }

  return (
    <div className="header" >
      <Link to="/" onClick={handleReturnHome}>
        <FontAwesomeIcon icon={faCocktail} />
      </Link>
      <h1>Cocktail Recipes</h1>
      <PageTitle />
    </div>
  );
}

export default connect(null, { clearSelectedCocktail })(Header);