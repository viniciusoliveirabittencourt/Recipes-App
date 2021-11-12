import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

export default function InProgressHeader(props) {
  const { recipeObject, type } = props;

  const location = useLocation();

  let likeButtonType;

  if (type === 'Meal') {
    likeButtonType = 'comida';
  } else {
    likeButtonType = 'bebida';
  }

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
        <div>
          <LikeButton
            id={ recipeObject[`id${type}`] }
            type={ likeButtonType }
            recipe={ recipeObject }
          />
          <ShareButton pathname={ location.pathname.replace('/in-progress', '') } />
        </div>
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
