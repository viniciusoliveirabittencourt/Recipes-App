import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export default function ButtonStartRecipe({ id, type }) {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [inProgressRecipes, setInProgressRecipes] = useState({});
  const showButtonStartRecipe = doneRecipes.some((doneRecipe) => doneRecipe.id === id);
  const typeObject = type === 'comidas' ? 'meals' : 'cocktails';
  const showButtonContinueRecipe = Object.entries(inProgressRecipes).length > 0
    && inProgressRecipes[typeObject][id];

  useEffect(() => {
    function getDoneRecipes() {
      const doneRecipesInStorage = JSON.parse(localStorage
        .getItem('doneRecipes')) || [];
      return setDoneRecipes(doneRecipesInStorage);
    }
    getDoneRecipes();

    function getInProgressRecipes() {
      const inProgressRecipesInStorage = JSON.parse(localStorage
        .getItem('inProgressRecipes')) || {};
      return setInProgressRecipes(inProgressRecipesInStorage);
    }
    getInProgressRecipes();
  }, []);

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
