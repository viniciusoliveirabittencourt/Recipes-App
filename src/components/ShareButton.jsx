import React from 'react';
import likeIconImg from '../images/whiteHeartIcon.svg';

export default function ShareButton() {
  return (
    <button type="button" data-testid="favorite-btn">
      <img src={ likeIconImg } alt="Curtir Receita" />
    </button>
  );
}
