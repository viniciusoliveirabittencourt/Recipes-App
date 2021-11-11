import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// import Carousel from './Carousel';
import Carousel from 'react-multi-carousel';
import Loading from './Loading';
// import RecipeCards from './RecipeCards';
import useFetch from '../hooks/useFetch';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MAX_RECIPES = 6;
export default function Recommendations({ type }) {
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fetchURL = type === 'Drink' ? drinksURL : mealsURL;
  const recipe = type === 'Drink' ? 'drinks' : 'meals';
  // const pagePath = type === 'Meal' ? 'comidas' : 'bebidas';
  const { data: dataRecommendations, loading } = useFetch(fetchURL, recipe);
  return (
    <>
      <Card.Body>
        <Card.Subtitle>
          Recomendações
        </Card.Subtitle>
      </Card.Body>
      <Carousel responsive={ responsive }>
        { loading
          ? <Loading />
          : dataRecommendations.slice(0, MAX_RECIPES).map((cardData, index) => (
            <Card
              data-testid={ `${index}-recomendation-card` }
              // className="container-cards"
              key={ cardData[`id${type}`] }
            >
              <Card.Img
                src={ cardData[`str${type}Thumb`] }
                alt={ cardData[`str${type}`] }
                data-testid={ `${index}-card-img` }
                className="card-img"
              />
              <Card.Body>
                <Card.Text>
                  { cardData.strCategory }
                </Card.Text>
                <Card.Subtitle
                  data-testid={ `${index}-card-name` }
                >
                  { cardData[`str${type}`] }
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
      </Carousel>
    </>
  );
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
