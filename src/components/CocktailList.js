import React, { Component } from 'react'

class CocktailList extends Component {
  render() {
    return (
      <div className="container cocktail-list">
        <div className="col-12 col-md-6 cocktail-list_image">Cocktail image goes here...</div>
        <div className="col-12 col-md-6 cocktail-list_details">Cocktail details go here...</div>
      </div>
    )
  }
}

export default CocktailList;