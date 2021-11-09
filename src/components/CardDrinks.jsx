import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

export default function CardDrinks({ drink, index, dataID }) {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <Col>
      <Card data-testid={ dataID } className="container-cards">
        <Card.Img
          variant="top"
          src={ strDrinkThumb }
          data-testid={ `${index}-card-img` }
          alt={ strDrink }
        />
        <Card.Body>
          <Card.Subtitle
            data-testid={ `${index}-card-name` }
          >
            { strDrink }
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardDrinks.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  dataID: PropTypes.string.isRequired,
};
