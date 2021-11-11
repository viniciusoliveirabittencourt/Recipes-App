import React from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function LikeButton({ id }) {
  // const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(false);
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isFavorite = getFavoriteRecipes
    .some((favoriteRecipe) => favoriteRecipe.id === id);
  const srcIconHeart = isFavorite ? blackHeartIcon : whiteHeartIcon;
  return (
    <button
      type="button"
      data-testid="favorite-btn"
      // onClick={ () => setIsFavoriteRecipe(!isFavoriteRecipe) }
      src={ srcIconHeart }
    >
      <img src={ srcIconHeart } alt="Curtir Receita" className="icon-heart" />
    </button>
  );
}

LikeButton.propTypes = {
  id: PropTypes.number.isRequired,
};
