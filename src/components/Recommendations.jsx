import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Carousel from './Carousel';
import Loading from './Loading';
import RecipeCards from './RecipeCards';
import useFetch from '../hooks/useFetch';

export default function Recommendations({ type }) {
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fetchURL = type === 'Drink' ? drinksURL : mealsURL;
  const recipe = type === 'Drink' ? 'drinks' : 'meals';
  const { data: dataRecommendations, loading } = useFetch(fetchURL, recipe);
  return (
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
              type={ type }
              dataID="recomendation-card"
              MAX_ELEMENTS={ 6 }
            />
          )}
      </Carousel>
    </Card.Body>

  );
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
