import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { dataLoading, fetchRandomCocktail } from '../store/actions';
import LoadingSpinner from './LoadingSpinner'
import CocktailList from './CocktailList';

const Home = (props) => {
  const { loading, fetchRandomCocktail } = props;

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="">
      <CocktailList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    cocktail: state.cocktail
  };
};

export default connect(mapStateToProps, { fetchRandomCocktail })(Home);