import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function ExploreFoodByIngredients() {
  const { data, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list', 'meals');
  const { setMeals, setIngredientsPage } = useContext(AppContext);
  const history = useHistory();

  const handleClick = async (ingredient) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    setMeals(result.meals);
    setIngredientsPage(true);
    history.push('/comidas');
  };

  return (

    <div>
      <Header pagename="Explorar Ingredientes" />
      { loading ? <Loading /> : data.slice(0, Number('12')).map((ingredient, index) => (
        <button
          type="submit"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => handleClick(ingredient.strIngredient) }
        >
          <h3 data-testid={ `${index}-card-name` }>{ ingredient.strIngredient }</h3>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            alt={ ingredient.strIngredient }
          />
        </button>
      )) }
      <Footer />
    </div>
  );
}

export default ExploreFoodByIngredients;
