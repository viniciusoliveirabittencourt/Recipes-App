import React from 'react';
import shareIcon from '../images/shareIcon.svg';

export  default function CardRecipiesDone({ doneFood:{ tags }, doneFood, index }) {
  const bodyFood = () => {
    return (
      <section>
        <img alt="imagem comida" src={ doneFood.image } data-testid={`${index}-horizontal-image`} />
        <p data-testid={`${index}-horizontal-top-text`}>{ `${doneFood.category} - ${doneFood.area}` }</p>
        <img alt="Botão Compartilhar" src={ shareIcon } data-testid={`${index}-horizontal-share-btn`} />
        <h2 data-testid={`${index}-horizontal-name`}>{ doneFood.name }</h2>
        <p data-testid={`${index}-horizontal-done-date`}>{ doneFood.doneDate }</p>
        { tags.map((element) => <span data-testid={`${index}-${element}-horizontal-tag`}>{ element }</span>) }
      </section>
    );
  }

  const bodyDrink = () => {
    return (
      <section>
        <img alt="imagem comida" src={ doneFood.image } data-testid={`${index}-horizontal-image`} />
        <p data-testid={`${index}-horizontal-top-text`}>{ doneFood.alcoholicOrNot }</p>
        <img alt="Botão Compartilhar" src={ shareIcon } data-testid={`${index}-horizontal-share-btn`} />
        <h2 data-testid={`${index}-horizontal-name`}>{ doneFood.name }</h2>
        <p data-testid={`${index}-horizontal-done-date`}>{ doneFood.doneDate }</p>
      </section>
    );
  }

  return doneFood.type === 'comida' ? bodyFood() : bodyDrink();
}
