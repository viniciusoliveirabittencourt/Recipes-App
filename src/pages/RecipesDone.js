import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardRecipiesDone from '../components/CardRecipiesDone';

function RecipesDone() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const arrayWithFoodDone = localStorage.getItem('doneRecipes');
    setDoneRecipes(JSON.parse(arrayWithFoodDone));
  }, []);

  return (
    <section>
      <Header pagename="Receitas Feitas" completeSearch={ false } />
      <header>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </header>
      <article>
        {
          doneRecipes.length === 0 ? <h1>Sem comidas finalizadas.</h1> :
          doneRecipes.map((element, index) => <CardRecipiesDone
            key={ element.id }
            doneFood={ element }
            index={ index }
          />)
        }
      </article>
    </section>
  );
}

export default RecipesDone;
