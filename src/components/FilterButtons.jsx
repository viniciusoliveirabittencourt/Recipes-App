import React from 'react';
import PropTypes from 'prop-types';
import '../styles/filterButtons.css';

export default function FilterButtons({ favoriteRecipes, onSetFilterFavorites }) {
  function handleClickFilterButton({ target: { innerText } }) {
    const filterFavoriteRecipes = (typeOfRecipe) => favoriteRecipes
      .filter(({ type }) => type === typeOfRecipe);
    switch (innerText) {
    case 'Foods':
      return onSetFilterFavorites(filterFavoriteRecipes('comida'));
    case 'Drinks':
      return onSetFilterFavorites(filterFavoriteRecipes('bebida'));
    default:
      return onSetFilterFavorites(favoriteRecipes);
    }
  }
  return (
    <div className="filter-buttons">
      <button
        type="button"
        onClick={ (e) => handleClickFilterButton(e) }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        onClick={ (e) => handleClickFilterButton(e) }
        data-testid="filter-by-food-btn"
      >
        Food

      </button>
      <button
        type="button"
        onClick={ (e) => handleClickFilterButton(e) }
        data-testid="filter-by-drink-btn"
      >
        Drinks

      </button>
    </div>
  );
}

FilterButtons.propTypes = {
  favoriteRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSetFilterFavorites: PropTypes.func.isRequired,
};
