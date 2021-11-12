import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { useAppContext } from '../context/AppProvider';

export default function LikeButton({ id, recipe, type, dataID }) {
  const favoriteRecipesInStorage = JSON.parse(localStorage
    .getItem('favoriteRecipes')) || [];
  const isFavorite = favoriteRecipesInStorage.some((favorite) => favorite.id === id);
  const { favoriteRecipes, setFavoriteRecipes } = useAppContext();
  const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(isFavorite);
  const srcIconHeart = isFavoriteRecipe ? blackHeartIcon : whiteHeartIcon;

  const saveOnLocalStorage = (favoriteRecipe) => localStorage
    .setItem('favoriteRecipes', JSON.stringify(favoriteRecipe));

  const saveFavoriteRecipe = () => {
    if (!isFavoriteRecipe) {
      const favoriteRecipe = {
        id: recipe.idDrink || recipe.idMeal,
        type,
        area: recipe.strArea || '',
        category: recipe.strCategory || '',
        alcoholicOrNot: recipe.strAlcoholic || '',
        name: recipe.strDrink || recipe.strMeal,
        image: recipe.strDrinkThumb || recipe.strMealThumb,
      };
      const newFavoriteRecipes = [...favoriteRecipes, favoriteRecipe];
      saveOnLocalStorage(newFavoriteRecipes);
      setFavoriteRecipes(newFavoriteRecipes);
      setIsFavoriteRecipe(!isFavoriteRecipe);
    } else {
      const excludeFavoriteRecipe = favoriteRecipes
        .filter((favoriteRecipe) => favoriteRecipe.id !== id);
      saveOnLocalStorage(excludeFavoriteRecipe);
      setFavoriteRecipes(excludeFavoriteRecipe);
      setIsFavoriteRecipe(!isFavoriteRecipe);
    }
  };

  return (
    <input
      type="image"
      data-testid={ dataID }
      onClick={ () => saveFavoriteRecipe() }
      src={ srcIconHeart }
      alt="Curtir Receita"
      className="icon-heart"
    />
  );
}

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  dataID: PropTypes.string,
};

LikeButton.defaultProps = {
  dataID: 'favorite-btn',
};
