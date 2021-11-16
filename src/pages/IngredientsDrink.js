import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinksByIngredients() {
  const [ingredientsDrinks, setIngredientsDrinks] = useState([]);
  const { setIngredientsFetch, setIngredientsPage } = useContext(AppContext);
  const history = useHistory();

  async function fecthDrinks() {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const result = await fetch(endpoint).then((response) => response.json());
    const slicedResult = result.drinks.slice(0, Number('12'));
    setIngredientsDrinks(slicedResult);
  }

  useEffect(() => {
    fecthDrinks();
    setIngredientsPage(false);
  }, []);

  const handleClick = async (ingredient) => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const result = await fetch(endpoint).then((response) => response.json());
    const slicedResult = result.drinks.slice(0, Number('12'));
    setIngredientsFetch(slicedResult);
    setIngredientsPage(true);
    history.push('/bebidas');
  };

  return (
    <div>
      <Header pagename="Explorar Ingredientes" />
      <p>Tela de explorar bebidas por ingrediente</p>
      { ingredientsDrinks.map((drink, index) => (
        <button
          type="submit"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(drink.strIngredient1) }
        >
          <h3 data-testid={ `${index}-card-name` }>{ drink.strIngredient1 }</h3>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png` }
            alt={ drink.strIngredient1 }
          />
        </button>
      )) }
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
