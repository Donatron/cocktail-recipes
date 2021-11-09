import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { clearSelectedCocktail, clearError, resetState, fetchRandomCocktail } from '../store/actions'

const PageTitle = (props) => {
  const {
    cocktail,
    clearSelectedCocktail,
    loading,
    error,
    clearError,
    resetState,
    fetchRandomCocktail
  } = props;
  const { selectedCocktail } = cocktail;

  if (loading) return null;

  const handleClick = () => {
    clearSelectedCocktail();
    clearError();
  }

  const handleResetSearch = () => {
    resetState();
    fetchRandomCocktail();
  }

  if (error.message) return null;

  const setPageTitle = () => {
    if (cocktail.isRandom && !selectedCocktail) return 'Featured Cocktail';
    if (selectedCocktail) return `${selectedCocktail.strDrink} Recipe`;
    return 'Search Results';
  }

  return (
    <div className="page-title">
      <Container>
        <Row >
          <Col className="page-title_title">
            {selectedCocktail && <Link to="/" ><FontAwesomeIcon icon={faArrowLeft} onClick={handleClick} /></Link>}
            <h3 className={cocktail.isRandom ? "page-title_title-random" : "page-title_title-selected"}>
              {setPageTitle()}
            </h3>
            {cocktail.isRandom || selectedCocktail ? null : <Button color="primary" onClick={handleResetSearch}>Reset</Button>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  clearSelectedCocktail,
  clearError,
  resetState,
  fetchRandomCocktail
})(PageTitle);