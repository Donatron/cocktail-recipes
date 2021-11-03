import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { clearSelectedCocktail, fetchRandomCocktail, resetState, clearError } from '../store/actions'

const PageTitle = (props) => {
  const {
    search,
    cocktail,
    clearSelectedCocktail,
    fetchRandomCocktail,
    resetState,
    loading,
    error,
    clearError
  } = props;
  const { selectedCocktail, isRandom } = cocktail;

  if (loading) return null;

  const setPageTitle = () => {
    if (selectedCocktail) return setSelectedCocktailPageTitle();
    if (search.searchType === 'name' || search.searchType === 'ingredient') {
      return `COCKTAILS USING ${search.searchTerm.toUpperCase()} RECIPES`;
    }
    if (search.searchType === 'alcoholContent') {
      return `RECIPES WITH ${search.searchParams.alcoholContent.toUpperCase()} CONTENT`;
    }
    if (search.searchType === 'glassType') {
      return `RECIPES USING A ${search.searchParams.glassType.toUpperCase()}`;
    }
  }

  const setSelectedCocktailPageTitle = () => {
    return `${selectedCocktail.strDrink.toUpperCase()} RECIPE`;
  }

  const handleClick = () => {
    clearSelectedCocktail();
    clearError();
  }

  const handleNewSearch = () => {
    resetState();
    fetchRandomCocktail();
  }

  const showNewSearchButton = () => {
    const { cocktails, selectedCocktail, isRandom } = props.cocktail;
    return !selectedCocktail && !isRandom && Object.keys(cocktails).length
  }

  if (error.message) return null;

  const showNewSearch = showNewSearchButton();

  return (
    <div className="page-title">
      <Container>
        <Row >
          <Col className="page-title_title">
            {selectedCocktail && <Link to="/" ><FontAwesomeIcon icon={faArrowLeft} onClick={handleClick} /></Link>}
            <h3>
              {cocktail.isRandom && !selectedCocktail ? 'Featured Cocktail' : setPageTitle()}
            </h3>
            {showNewSearch ? <Button color="primary" onClick={handleNewSearch}>New Search</Button> : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search,
    cocktail: state.cocktail,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  clearSelectedCocktail,
  fetchRandomCocktail,
  resetState,
  clearError
})(PageTitle);