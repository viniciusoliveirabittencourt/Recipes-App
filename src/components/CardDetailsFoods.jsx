import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import VideoRecipe from './VideoRecipe';
import Ingredients from './Ingredients';
import Recommendations from './Recommendations';
import ButtonStartRecipe from './ButtonStartRecipe';
import '../styles/cardDetails.css';

export default function CardDetailsFoods(props) {
  const location = useLocation();
  const { recipeMeal, id } = props;
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
  } = recipeMeal;

  return (
    <Card>
      <Card.Img variant="top" src={ strMealThumb } data-testid="recipe-photo" />
      <Card.Body className="card_title">
        <div>
          <Card.Title data-testid="recipe-title">{ strMeal }</Card.Title>
          <Card.Text data-testid="recipe-category">{ strCategory }</Card.Text>
        </div>
        <div>
          <LikeButton id={ id } type="comida" recipe={ recipeMeal } />
          <ShareButton pathname={ location.pathname } />
        </div>
      </Card.Body>
      <Ingredients recipe={ recipeMeal } />
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
      <VideoRecipe />
      <Recommendations type="Drink" />
      <ButtonStartRecipe id={ id } type="comidas" />
    </Card>
  );
}

CardDetailsFoods.propTypes = {
  recipeMeal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strYoutube: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
