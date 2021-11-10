import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import RecipeCards from './RecipeCards';
import shareIconImg from '../images/shareIcon.svg';
import likeIconImg from '../images/whiteHeartIcon.svg';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import '../styles/cardDetails.css';

const MAX_INGREDIENTS = 20;

export default function CardDetailsDrinks({ recipeDrink }) {
  const { data: dataRecommendations, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=', 'meals');

  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = recipeDrink;

  const ingredients = [];
  const measure = [];

  for (let index = 1; index < MAX_INGREDIENTS; index += 1) {
    if (recipeDrink[`strIngredient${index}`]) {
      ingredients.push(recipeDrink[`strIngredient${index}`]);
    }
    if (recipeDrink[`strMeasure${index}`]) {
      measure.push(recipeDrink[`strMeasure${index}`]);
    }
  }

  return (
    <Card>
      <Card.Img variant="top" src={ strDrinkThumb } data-testid="recipe-photo" />
      <Card.Body className="card_title">
        <div>
          <Card.Title
            data-testid="recipe-title"
          >
            { strDrink }
          </Card.Title>
          <Card.Text
            data-testid="recipe-category"
          >
            { strAlcoholic }
          </Card.Text>
        </div>
        <div>
          <button type="button" data-testid="share-btn">
            <img src={ shareIconImg } alt="Compartilhar Receita" />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ likeIconImg } alt="Curtir Receita" />
          </button>
        </div>
      </Card.Body>
      <Card.Body>
        <Card.Subtitle>
          Ingredientes
        </Card.Subtitle>
        { ingredients.map((ingredient, index) => (
          <Card.Text key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${ingredient} ${measure[index]}`}
          </Card.Text>
        )) }
      </Card.Body>
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
      <Card.Body>
        <Card.Subtitle>
          Recomendações
        </Card.Subtitle>
        { loading
          ? <Loading />
          : (
            <RecipeCards
              cardsData={ dataRecommendations }
              type="Meal"
              dataID="recomendation-card"
            />
          )}
      </Card.Body>
      <Card.Footer>
        <Button variant="success" data-testid="start-recipe-btn">
          Iniciar Receita
        </Button>
      </Card.Footer>
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
};
