import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

import CocktailRandom from './CocktailRandom'

class CocktailList extends Component {
  render() {
    const { cocktail } = this.props;
    const { cocktails, isRandom } = cocktail;

    return (
      <Container className="cocktail-list">
        {
          isRandom ? <CocktailRandom cocktail={cocktails} /> : null
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