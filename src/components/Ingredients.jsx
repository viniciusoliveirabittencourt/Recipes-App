import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function Ingredients({ recipe }) {
  const MAX_INGREDIENTS = 20;
  const ingredients = [];
  const measure = [];

  for (let index = 1; index < MAX_INGREDIENTS; index += 1) {
    if (recipe[`strIngredient${index}`]) {
      ingredients.push(recipe[`strIngredient${index}`]);
    }
    if (recipe[`strMeasure${index}`]) {
      measure.push(recipe[`strMeasure${index}`]);
    }
  }

  return (
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
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string),
};

Ingredients.defaultProps = {
  recipe: {},
};
