import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { dataLoading } from '../store/actions';
import LoadingSpinner from './LoadingSpinner'
import CocktailList from './CocktailList';

const Home = (props) => {
  const { loading, dataLoading } = props;

  useEffect(() => {
    setTimeout(() => {
      dataLoading();
    }, 2000);
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
    loading: state.loading
  };
};

export default connect(mapStateToProps, { dataLoading })(Home);