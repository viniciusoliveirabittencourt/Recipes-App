import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardRecipiesDone from '../components/CardRecipiesDone';

function RecipesDone() {
  const [doneRecipes] = useState(() => {
    const arrayWithFoodDone = localStorage.getItem('doneRecipes');
    return arrayWithFoodDone ? JSON.parse(arrayWithFoodDone) : [];
  });
  const [filterCategory, setFilterCategory] = useState(doneRecipes);

  useEffect(() => {}, [filterCategory]);

  const changeCategory = (category) => {
    switch (category) {
    case 'food': {
      const newArr = doneRecipes.filter((foods) => foods.type === 'comida');
      setFilterCategory(newArr);
      break;
    }
    case 'drink': {
      const newArr = doneRecipes.filter((foods) => foods.type === 'bebida');
      setFilterCategory(newArr);
      break;
    }
    default: {
      setFilterCategory(doneRecipes);
      break;
    }
    }
  };

  return (
    <section>
      <Header pagename="Receitas Feitas" completeSearch={ false } />
      <header>
        <button
          onClick={ () => changeCategory('') }
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>
        <button
          onClick={ () => changeCategory('food') }
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>
        <button
          onClick={ () => changeCategory('drink') }
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </header>
      <article>
        {
          doneRecipes.length === 0 ? <h1>Sem comidas finalizadas.</h1>
            : filterCategory.map((element, index) => (
              <CardRecipiesDone
                key={ element.id }
                doneFood={ element }
                index={ index }
              />))
        }
      </article>
    </section>
  );
}

export default RecipesDone;
