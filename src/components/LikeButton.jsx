import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function LikeButton({ id, recipe, type }) {
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isAlreadyFavorite = getFavoriteRecipes
    .some((favoriteRecipe) => favoriteRecipe.id === id);
  const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(isAlreadyFavorite);
  const srcIconHeart = isFavoriteRecipe ? blackHeartIcon : whiteHeartIcon;

  const saveFavoriteRecipe = () => {
    if (!isAlreadyFavorite) {
      const favoriteRecipe = {
        id: recipe.idDrink || recipe.idMeal,
        type,
        area: recipe.strArea || '',
        category: recipe.strCategory || '',
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strDrink || recipe.strMeal,
        image: recipe.strDrinkThumb || recipe.strMealThumb,
      };
      const newFavoriteRecipes = [...getFavoriteRecipes, favoriteRecipe];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
      setIsFavoriteRecipe(!isFavoriteRecipe);
    } else {
      const excludeFavoriteRecipe = getFavoriteRecipes
        .filter((favoriteRecipe) => favoriteRecipe.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(excludeFavoriteRecipe));
      setIsFavoriteRecipe(!isFavoriteRecipe);
    }
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => saveFavoriteRecipe() }
      src={ srcIconHeart }
    >
      <img src={ srcIconHeart } alt="Curtir Receita" className="icon-heart" />
    </button>
  );
}

LikeButton.propTypes = {
  id: PropTypes.number.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
