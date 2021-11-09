import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';

export default function SearchBar() {
  const location = useLocation();
  const history = useHistory();
  const { dataMeals, dataDrinks, setDataMeals, setDataDrinks } = useAppContext();
  const [search, setSearch] = useState('');
  const [searchParameters, setSearchParameters] = useState('');

  const isMeals = location.pathname === '/comidas';
  const isDrinks = location.pathname === '/bebidas';
  const isMealsOrDrinks = isMeals || !isDrinks;

  function handleChange({ target: { value } }) {
    setSearchParameters(value);
  }

  async function sendRequisition(url) {
    const baseURL = isMealsOrDrinks
      ? 'https://www.themealdb.com/api/json/v1/1/'
      : 'https://www.thecocktaildb.com/api/json/v1/1/';

    try {
      const response = await fetch(`${baseURL}${url}`);
      const json = await response.json();
      if (isMealsOrDrinks) {
        setDataMeals(json.meals);
      } else {
        setDataDrinks(json.drinks);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (dataMeals.length === 1) {
      history.push(`/comidas/${dataMeals[0].idMeal}`);
    }
    if (dataDrinks.length === 1) {
      history.push(`/bebidas/${dataDrinks[0].idDrink}`);
    }
    console.log(dataMeals);
    console.log(dataDrinks);
  }, [dataMeals, dataDrinks]);

  function handleSubmitSearch(e) {
    e.preventDefault();

    if (search === '' && searchParameters !== '') {
      return global.alert('Preencha o campo de busca');
    }

    if (search !== '') {
      switch (searchParameters) {
      case 'ingredient':
        return sendRequisition(`filter.php?i=${search}`);
      case 'name':
        return sendRequisition(`search.php?s=${search}`);
      case 'firstLetter':
        if (search.length > 1) {
          return global.alert('Sua busca deve conter somente 1 (um) caracter');
        }
        return sendRequisition(`search.php?f=${search}`);
      default:
        return null;
      }
    }

    return global.alert('Selecione um dos filtros');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Faça sua busca..."
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
        data-testid="search-input"
      />
      <div>
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="search"
            id="ingredient"
            value="ingredient"
            checked={ searchParameters === 'ingredient' }
            onChange={ (e) => handleChange(e) }
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            name="search"
            id="name"
            value="name"
            checked={ searchParameters === 'name' }
            onChange={ (e) => handleChange(e) }
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            name="search"
            id="firstLetter"
            value="firstLetter"
            checked={ searchParameters === 'firstLetter' }
            onChange={ (e) => handleChange(e) }
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleSubmitSearch }
      >
        Buscar
      </button>
    </form>
  );
}
