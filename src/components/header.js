import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import PageTitle from './pageTitle';

import { clearSelectedCocktail, resetState, fetchRandomCocktail } from '../store/actions'

const Header = (props) => {
  const { cocktail, clearSelectedCocktail, resetState, fetchRandomCocktail } = props;

  const handleReturnHome = () => {
    clearSelectedCocktail();
  }

  const handleNewSearch = () => {
    resetState();
    fetchRandomCocktail();
  }

  const showNewSearchButton = () => {
    const { cocktails, selectedCocktail, isRandom } = cocktail;
    if (!selectedCocktail && !isRandom && Object.keys(cocktails).length) {
      return true;
    }

    return false;
  }

  const showNewSearch = showNewSearchButton();

  return (
    <div className="header" >
      <Link to="/" onClick={handleReturnHome}>
        <FontAwesomeIcon icon={faCocktail} />
      </Link>
      <h1>Cocktail Recipes</h1>
      <PageTitle />
      {showNewSearch ? <Button color="info" onClick={handleNewSearch} className="btn-newSearch">New Search</Button> : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps, { clearSelectedCocktail, resetState, fetchRandomCocktail })(Header);