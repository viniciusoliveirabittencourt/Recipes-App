import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

export default function CardFavoriteRecipe({ recipe, pathname, index, type }) {
  const isMeal = type === 'comida';
  return (
    <Card key={ recipe.id }>
      <Link to={ isMeal ? `/comidas/${recipe.id}` : `/bebidas/${recipe.id}` }>
        <Card.Img
          variant="top"
          src={ recipe.image }
          data-testid={ `${index}-horizontal-image` }
        />
        <Card.Body className="card_title">
          <div>
            <Card.Title
              data-testid={ `${index}-horizontal-name` }
            >
              { recipe.name }

            </Card.Title>

            <Card.Text
              data-testid={ `${index}-horizontal-top-text` }
            >
              { isMeal ? `${recipe.area} - ${recipe.category}` : recipe.alcoholicOrNot }
            </Card.Text>
          </div>
          <div>
            <LikeButton
              id={ recipe.id }
              type="bebida"
              recipe={ recipe }
              dataID={ `${index}-horizontal-share-btn` }
            />
            <ShareButton
              pathname={ pathname }
              dataID={ `${index}-horizontal-favorite-btn` }
              id={ recipe.id }
            />
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}

CardFavoriteRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
