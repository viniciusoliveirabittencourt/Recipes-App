import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Copy from 'clipboard-copy';
import { Card } from 'react-bootstrap';
import shareIconImg from '../images/shareIcon.svg';

export default function CopyButton({ pathname }) {
  const [copied, setCopied] = useState(false);

  const handleCopyRecipe = () => {
    Copy(`http://localhost:3000${pathname}`);
    setCopied(!copied);
  };

  return (
    <>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => handleCopyRecipe() }
      >
        <img src={ shareIconImg } alt="Compartilhar Receita" />
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

CopyButton.propTypes = {
  pathname: PropTypes.string.isRequired,
};
