import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

import CocktailRandom from './CocktailRandom';
import CocktailSearchResults from './CocktailSearchResults';

class CocktailList extends Component {
  render() {
    const { cocktail } = this.props;
    const { cocktails, isRandom } = cocktail;

    return (
      <Container className="cocktail-list">
        {
          isRandom ? <CocktailRandom cocktail={cocktails} /> : <CocktailSearchResults cocktails={cocktails} />
        }
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail
  }
}

export default connect(mapStateToProps)(CocktailList);