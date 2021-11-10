import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import '../styles/cards.css';

export default function RecipeCards(props) {
  const { cardsData, type } = props;

  const STARTING_ON_INDEX_0 = 0;
  const GET_TWELVE_ELEMENTS = 12;
  const pagePath = type === 'Meal' ? 'comidas' : 'bebidas';

  return (
    <Row xs={ 2 } md={ 2 } className="g-2" as="section">
      {
        [...cardsData]
          .splice(STARTING_ON_INDEX_0, GET_TWELVE_ELEMENTS)
          .map((cardData, index) => (
            <Col key={ cardData[`id${type}`] }>
              <Link to={ `/${pagePath}/${cardData[`id${type}`]}` }>
                <Card
                  data-testid={ `${index}-recipe-card` }
                  className="container-cards"
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
              </Link>
            </Col>
          ))
      }
    </Row>
  );
}

RecipeCards.propTypes = {
  cardsData: PropTypes.array,
  recipeType: PropTypes.string,
}.isRequired;
