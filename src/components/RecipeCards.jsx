import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import '../styles/cards.css';

export default function RecipeCards(props) {
  const { cardsData, type, dataID, MAX_ELEMENTS } = props;

  const STARTING_ON_INDEX_0 = 0;
  const pagePath = type === 'Meal' ? 'comidas' : 'bebidas';

  return (
    <>
      {
        [...cardsData]
          .splice(STARTING_ON_INDEX_0, MAX_ELEMENTS)
          .map((cardData, index) => (
            <Col key={ cardData[`id${type}`] }>
              <Link to={ `/${pagePath}/${cardData[`id${type}`]}` }>
                <Card
                  data-testid={ `${index}-${dataID}` }
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
    </>
  );
}

RecipeCards.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  dataID: PropTypes.string.isRequired,
  MAX_ELEMENTS: PropTypes.number.isRequired,
};
