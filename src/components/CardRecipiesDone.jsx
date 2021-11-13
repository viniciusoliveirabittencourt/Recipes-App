import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../styles/recipiesdone.css';

export default function CardRecipiesDone({ doneFood: { tags }, doneFood, index }) {
  const showAndDestroyResponse = () => {
    const TIME_TO_RESPONSE_DIE = 3000;
    const respondeCopied = doneFood.type === 'comida' ? document
      .getElementById('responseCopiedFood') : document
      .getElementById('responseCopiedDrink');
    respondeCopied.style.display = 'inline';
    setTimeout(() => { respondeCopied.style.display = 'none'; }, TIME_TO_RESPONSE_DIE);
  };

  const clipBoard = () => {
    const urlCop = `http://localhost:3000/${doneFood.type}s/${doneFood.id}`;
    window.navigator.clipboard.writeText(urlCop);
    showAndDestroyResponse();
  };

  const bodyFood = () => (
    <section>
      <Link to={ `/${doneFood.type}s/${doneFood.id}` }>
        <img
          className="imagemCardRecipies"
          alt="imagem comida"
          src={ doneFood.image }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        { `${doneFood.area} - ${doneFood.category}` }
      </p>
      <button
        onClick={ clipBoard }
        type="button"
      >
        <img
          alt="Botão Compartilhar"
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          style={ { cursor: 'pointer' } }
        />
      </button>
      <span
        style={ { color: '#c87e7e', display: 'none' } }
        id="responseCopiedFood"
      >
        Link copiado!
      </span>
      <Link to={ `/${doneFood.type}s/${doneFood.id}` }>
        <h2 data-testid={ `${index}-horizontal-name` }>{ doneFood.name }</h2>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>{ doneFood.doneDate }</p>
      { tags.map((element, indexArr) => (
        <span
          key={ indexArr }
          data-testid={ `${index}-${element}-horizontal-tag` }
        >
          { element }
        </span>)) }
    </section>
  );

  const bodyDrink = () => (
    <section>
      <Link to={ `/${doneFood.type}s/${doneFood.id}` }>
        <img
          className="imagemCardRecipies"
          alt="imagem comida"
          src={ doneFood.image }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { doneFood.alcoholicOrNot }
      </p>
      <button
        onClick={ clipBoard }
        type="button"
      >
        <img
          alt="Botão Compartilhar"
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          style={ { cursor: 'pointer' } }
        />
      </button>
      <span
        style={ { color: '#c87e7e', display: 'none' } }
        id="responseCopiedDrink"
      >
        Link copiado!
      </span>
      <Link to={ `/${doneFood.type}s/${doneFood.id}` }>
        <h2 data-testid={ `${index}-horizontal-name` }>{ doneFood.name }</h2>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>{ doneFood.doneDate }</p>
    </section>
  );

  return doneFood.type === 'comida' ? bodyFood() : bodyDrink();
}
