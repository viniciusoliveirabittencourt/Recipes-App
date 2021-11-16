import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';

function ExploreDrinksByIngredients() {
  const { data, loading } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', 'drinks');
  const { setDrinks, setIngredientsPage } = useContext(AppContext);
  const history = useHistory();

  const handleClick = async (ingredient) => {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    setDrinks(result.drinks);
    setIngredientsPage(true);
    history.push('/bebidas');
  };

  return (
    <div>
      <Header pagename="Explorar Ingredientes" />
      { loading ? <Loading /> : data.slice(0, Number('12')).map((drink, index) => (
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
