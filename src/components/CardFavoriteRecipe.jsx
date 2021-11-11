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
    <Card key={ recipe.id } className="card-favorite">
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
            <Card.Subtitle
              data-testid={ `${index}-horizontal-name` }
              className="card-text"
            >
              { recipe.name }

            </Card.Subtitle>
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
            dataID={ `${index}-horizontal-favorite-btn` }

          />
          <ShareButton
            dataID={ `${index}-horizontal-share-btn` }
            pathname={ pathname }
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
