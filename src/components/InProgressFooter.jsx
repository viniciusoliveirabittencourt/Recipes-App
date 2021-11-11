import React from 'react';
import PropTypes from 'prop-types';

export default function InProgressFooter(props) {
  const { doneButtonIsDisabled, changePath } = props;

  return (
    <section style={ { width: '95%' } }>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        style={ { width: '100%' } }
        disabled={ doneButtonIsDisabled }
        onClick={ changePath }
      >
        Finalizar Receita
      </button>
    </section>
  );
}

InProgressFooter.propTypes = {
  doneButtonIsDisabled: PropTypes.bool,
  changePath: PropTypes.func,
}.isRequired;
