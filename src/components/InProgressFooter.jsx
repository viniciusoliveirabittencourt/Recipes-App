import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function InProgressFooter(props) {
  const { doneButtonIsDisabled } = props;

  const history = useHistory();
  const changePath = () => { history.push('/receitas-feitas'); };

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
