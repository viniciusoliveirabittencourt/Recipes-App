import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export default function ButtonStartRecipe({ id, type }) {
  const getDoneRecipes = JSON.parse(
    localStorage.getItem('doneRecipes'),
  ) || [];
  const getInProgressRecipes = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  ) || {};

  const showButtonStartRecipe = getDoneRecipes.some((doneRecipe) => doneRecipe.id === id);
  const typeObject = type === 'comidas' ? 'meals' : 'cocktails';
  const showButtonContinueRecipe = Object.entries(getInProgressRecipes).length > 0
    && getInProgressRecipes[typeObject][id];

  return (
    <Card.Footer>
      {
        !showButtonContinueRecipe ? (
          <Link to={ `/${type}/${id}/in-progress` }>
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
  );
}

ButtonStartRecipe.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
