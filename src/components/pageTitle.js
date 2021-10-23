import React from 'react';
import { connect } from 'react-redux';

const PageTitle = (props) => {
  const { search, cocktail, loading } = props;
  const { selectedCocktail } = cocktail;

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

  return (
    <div className="page-title">
      <h3 className="page-title_title">
        {cocktail.isRandom ? 'Featured Cocktail' : setPageTitle()}
      </h3>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    search: state.search,
    cocktail: state.cocktail,
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(PageTitle);