import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import RecipeCards from './RecipeCards';
import shareIconImg from '../images/shareIcon.svg';
import likeIconImg from '../images/whiteHeartIcon.svg';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';
import '../styles/cardDetails.css';
import Carousel from './Carousel';

const MAX_INGREDIENTS = 20;

export default function CardDetailsDrinks(props) {
  const { recipeDrink, doneRecipes, inProgressRecipes, id } = props;
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = recipeDrink;

  const { data: dataRecommendations, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=', 'meals');
  const showButtonStartRecipe = doneRecipes.some((doneRecipe) => doneRecipe.id === id);
  const showButtonContinueRecipe = Object.entries(inProgressRecipes).length > 0 
    && inProgressRecipes.cocktails[id];

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
        <Carousel>
          { loading
            ? <Loading />
            : (
              <RecipeCards
                cardsData={ dataRecommendations }
                type="Meal"
                dataID="recomendation-card"
                MAX_ELEMENTS={ 6 }
              />
            )}
        </Carousel>
      </Card.Body>
      <Card.Footer>
        {
          !showButtonContinueRecipe ? (
            <Link to={ `/comidas/${id}/in-progress` }>
              <Button
                variant="success"
                data-testid="start-recipe-btn"
                className="start-recipe-btn"
                hidden={ showButtonStartRecipe }
              >
                Iniciar Receita
              </Button>
            </Link>
          ) : (
            <Button
              variant="success"
              data-testid="start-recipe-btn"
              className="start-recipe-btn"
              hidden={ showButtonStartRecipe }
            >
              Continuar Receita
            </Button>
          )
        }
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
  doneRecipes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  inProgressRecipes: PropTypes.objectOf(PropTypes.object),
  id: PropTypes.string.isRequired,
};

CardDetailsDrinks.defaultProps = {
  doneRecipes: [],
  inProgressRecipes: [],
};
