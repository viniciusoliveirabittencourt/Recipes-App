import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';

export default function CardFavoriteRecipe({ recipe, index, type }) {
  const isMeal = type === 'comida';
  const pathname = isMeal ? `/comidas/${recipe.id}` : `/bebidas/${recipe.id}`;
  return (
    <Card key={ recipe.id }>
      <Link to={ pathname }>
        <Card.Img
          variant="top"
          src={ recipe.image }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <Card.Body className="card_title">
        <Link to={ pathname }>
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
        </Link>
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
    </Card>
  );
}

CardFavoriteRecipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
