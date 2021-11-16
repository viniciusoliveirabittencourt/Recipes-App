import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoodByIngredients() {
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const { setIngredientsFetch, setIngredientsPage } = useContext(AppContext);
  const history = useHistory();

  async function ingredientsApi() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const result = await fetch(endPoint).then((response) => response.json());
    const resultSlice = result.meals.slice(0, Number('12'));
    setMealsIngredients(resultSlice);
  }

  useEffect(() => {
    ingredientsApi();
    setIngredientsPage(false);
  }, []);

  const handleClick = async (ingredient) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const result = await fetch(endpoint).then((response) => response.json());
    const resultSlice = result.meals.slice(0, Number('12'));
    setIngredientsFetch(resultSlice);
    setIngredientsPage(true);
    history.push('/comidas');
  };

  return (

    <div>
      <Header page="Explorar Comidas por Ingredientes" />
      <p>Tela de explorar comidas por ingrediente</p>
      { mealsIngredients.map((ingredient, index) => (
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
