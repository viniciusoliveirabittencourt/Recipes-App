import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function InProgressHeader(props) {
  const { recipeObject, type } = props;

  const shareButtonIcon = <img src={ shareIcon } alt="share" />;
  const favoriteButtonIcon = <img src={ whiteHeartIcon } alt="whiteHeart" />;

  return (
    <section>
      <img
        data-testid="recipe-photo"
        src={ recipeObject[`str${type}Thumb`] }
        alt={ recipeObject[`str${type}`] }
        style={ { width: '100%', objectFit: 'none', height: '150px' } }
      />
      <div>
        <h1 data-testid="recipe-title">{ recipeObject[`str${type}`] }</h1>
        <button data-testid="share-btn" type="button">{ shareButtonIcon }</button>
        <button data-testid="favorite-btn" type="button">{ favoriteButtonIcon }</button>
        <div>
          <p data-testid="recipe-category">{ recipeObject.strCategory }</p>
        </div>
      </div>

    </section>
  );
}

InProgressHeader.propTypes = {
  recipeMock: PropTypes.object,
  type: PropTypes.string,
}.isRequired;
