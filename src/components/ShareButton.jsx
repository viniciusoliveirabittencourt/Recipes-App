import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Copy from 'clipboard-copy';
import { Card } from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ pathname, dataID }) {
  const [copied, setCopied] = useState(false);

  const handleCopyRecipe = () => {
    Copy(`http://localhost:3000${pathname}`);
    setCopied(!copied);
  };

  return (
    <>
      <button
        type="button"
        data-testid={ dataID }
        onClick={ () => handleCopyRecipe() }
        src={ shareIcon }
      >
        <img src={ shareIcon } alt="Compartilhar Receita" />
      </button>
      {
        copied && (
          <Card.Text>
            Link copiado!
          </Card.Text>
        )
      }
    </>
  );
}

ShareButton.propTypes = {
  pathname: PropTypes.string.isRequired,
  dataID: PropTypes.string,
};

ShareButton.defaultProps = {
  dataID: 'share-btn',
};
