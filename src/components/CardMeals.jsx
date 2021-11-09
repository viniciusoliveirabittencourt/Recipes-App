import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';
import { Card, Col } from 'react-bootstrap';

export default function CardMeals({ index, meal, dataID }) {
  const { strMeal, strMealThumb } = meal;
  return (
    <Col>
      <Card data-testid={ dataID } className="container-cards">
        <Card.Img
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
          className="card-img"
        />
        <Card.Body>
          <Card.Subtitle
            data-testid={ `${index}-card-name` }
            className="card-title"
          >
            { strMeal }
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardMeals.propTypes = {
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
  dataID: PropTypes.string.isRequired,
};
