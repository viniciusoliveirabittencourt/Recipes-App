import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import Ingredients from './Ingredients';
import Recommendations from './Recommendations';
import ButtonStartRecipe from './ButtonStartRecipe';
import '../styles/cardDetails.css';

export default function CardDetailsDrinks(props) {
  const location = useLocation();
  const { recipeDrink, id } = props;
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = recipeDrink;

  return (
    <Card>
      <Card.Img variant="top" src={ strDrinkThumb } data-testid="recipe-photo" />
      <Card.Body className="card_title">
        <div>
          <Card.Title data-testid="recipe-title">{ strDrink }</Card.Title>
          <Card.Text data-testid="recipe-category">{ strAlcoholic }</Card.Text>
        </div>
        <div>
          <LikeButton id={ id } type="bebida" recipe={ recipeDrink } />
          <ShareButton pathname={ location.pathname } />
        </div>
      </Card.Body>
      <Ingredients recipe={ recipeDrink } />
      <Card.Body>
        <Card.Subtitle>
          Instruções
        </Card.Subtitle>
        <Card.Text
          data-testid="instructions"
        >
          { strInstructions }
        </Card.Text>
      </Card.Body>
      <Recommendations type="Meal" />
      <ButtonStartRecipe id={ id } type="bebidas" />
    </Card>
  );
}

CardDetailsDrinks.propTypes = {
  recipeDrink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strAlcoholic: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
