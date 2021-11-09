import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

export default function RecipeCards(props) {
  const { cardsData, type } = props;

  const STARTING_ON_INDEX_0 = 0;
  const GET_TWELVE_ELEMENTS = 12;
  const history = useHistory();
  const pagePath = type === 'Meal' ? 'comidas' : 'bebidas';

  return (
    <div
      style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' } }
    >
      {
        [...cardsData]
          .splice(STARTING_ON_INDEX_0, GET_TWELVE_ELEMENTS)
          .map((cardData, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              key={ cardData[`id${type}`] }
              onClick={ () => history.push(`/${pagePath}/${cardData[`id${type}`]}`) }
              style={ { width: '40%' } }
            >
              <img
                src={ cardData[`str${type}Thumb`] }
                alt={ cardData[`str${type}`] }
                data-testid={ `${index}-card-img` }
                style={ { width: '100%' } }
              />
              <div>
                <h4
                  data-testid={ `${index}-card-name` }
                >
                  { cardData[`str${type}`] }
                </h4>
              </div>
            </div>
          ))
      }
    </div>
  );
}

RecipeCards.propTypes = {
  cardsData: PropTypes.array,
  recipeType: PropTypes.string,
}.isRequired;
