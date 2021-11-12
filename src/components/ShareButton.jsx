import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Copy from 'clipboard-copy';
import { Card } from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';

export default function Shareinput({ pathname, dataID }) {
  const [copied, setCopied] = useState(false);

  const handleCopyRecipe = () => {
    Copy(`http://localhost:3000${pathname}`);
    setCopied(!copied);
  };

  return (
    <>
      <input
        type="image"
        data-testid={ dataID }
        onClick={ () => handleCopyRecipe() }
        src={ shareIcon }
        alt="Compartilhar Receita"
        id="share-btn"
        className="share-btn"
      />
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

Shareinput.propTypes = {
  pathname: PropTypes.string.isRequired,
  dataID: PropTypes.string,
};

Shareinput.defaultProps = {
  dataID: 'share-btn',
};
