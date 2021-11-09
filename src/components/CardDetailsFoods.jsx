import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row } from 'react-bootstrap';
import CardMeals from './CardMeals';
import shareIconImg from '../images/shareIcon.svg';
import likeIconImg from '../images/whiteHeartIcon.svg';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import '../styles/cardDetails.css';

const MAX_INGREDIENTS = 20;

export default function CardDetailsFoods({ recipeMeal }) {
  const { data: dataRecommendations, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=', 'meals');
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
  } = recipeMeal;

  const ingredients = [];
  const measure = [];

  for (let index = 1; index < MAX_INGREDIENTS; index += 1) {
    if (recipeMeal[`strIngredient${index}`]) {
      ingredients.push(recipeMeal[`strIngredient${index}`]);
    }
    if (recipeMeal[`strMeasure${index}`]) {
      measure.push(recipeMeal[`strMeasure${index}`]);
    }
  }

  return (
    <Card>
      <Card.Img variant="top" src={ strMealThumb } data-testid="recipe-photo" />
      <Card.Body className="card_title">
        <div>
          <Card.Title
            data-testid="recipe-title"
          >
            { strMeal }
          </Card.Title>
          <Card.Text
            data-testid="recipe-category"
          >
            { strCategory }
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
          Video
        </Card.Subtitle>
        <iframe
          frameBorder="0"
          allow="autoplay; encrypted-media"
          title="video"
          data-testid="video"
        />
      </Card.Body>
      <Card.Body>
        <Card.Subtitle>
          Recomendações
        </Card.Subtitle>
        <Row xs={ 2 } sm={ 3 } className="g-4">
          { loading ? <Loading />
            : dataRecommendations.slice(0, 2).map((recipe, index) => (
              <CardMeals
                key={ index }
                meal={ recipe }
                index={ index }
                dataID={ `${index}-recomendation-card` }
              />
            ))}
        </Row>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" data-testid="start-recipe-btn">
          Iniciar Receita
        </Button>
      </Card.Footer>
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
};
