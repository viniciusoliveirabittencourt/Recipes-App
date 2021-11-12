import React from 'react';
import PropTypes from 'prop-types';

export default function InProgressBody(props) {
  const {
    ingredientsAndMeasures, recipeObject, handleCheckbox, checkboxState,
  } = props;

  return (
    <section>
      <h3>Ingredients</h3>
      <div style={ { backgroundColor: '#ECECEC', width: '95%' } }>
        { ingredientsAndMeasures.map((ingredient, index) => (
          <label
            htmlFor={ ingredient }
            key={ ingredient }
            data-testid={ `${index}-ingredient-step` }
            style={ checkboxState.includes(ingredient)
              ? { textDecoration: 'line-through' } : {} }
          >
            <input
              id={ ingredient }
              type="checkbox"
              checked={ checkboxState.includes(ingredient) }
              onChange={ ({ target: { id } }) => { handleCheckbox(id); } }
            />
            { ingredient }
          </label>
        ))}
      </div>
      <h3>Instructions</h3>
      <div style={ { backgroundColor: '#ECECEC', width: '95%' } }>
        <p data-testid="instructions">{ recipeObject.strInstructions }</p>
      </div>
    </section>
  );
}

InProgressBody.propTypes = {
  ingredientsAndMeasures: PropTypes.array,
  recipeObject: PropTypes.object,
  handleCheckbox: PropTypes.func,
  checkboxState: PropTypes.array,
}.isRequired;
