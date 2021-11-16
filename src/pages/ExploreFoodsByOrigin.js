import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAppContext } from '../context/AppProvider';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Foods() {
  const [valueCountry, setValueCountry] = useState('');
  const [newArrMeals, setNewArrMeals] = useState([]);
  const [pesquisaArray, setPesquisaArray] = useState([]);

  const {
    fetchCategoriesAndRecipes,
    meals,
    loading,
    selectedCategory,
    dataSearchMeals,
    isSearch,
  } = useAppContext();

  const EMPTY = 0;

  useEffect(() => {
    fetchCategoriesAndRecipes('meals');
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${valueCountry}`)
      .then((r) => r.json())
      .then((r) => {
        if (r.meals) { setPesquisaArray(r.meals); }
      });
  }, [selectedCategory, valueCountry]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((r) => r.json())
      .then((r) => setNewArrMeals(r.meals));
  }, []);

  const handleSelect = ({ target }) => {
    const { value } = target;
    setValueCountry(value);
  };

  const createCategoryButtons = () => (
    <select
      data-testid="explore-by-area-dropdown"
      onChange={ handleSelect }
      value={ valueCountry }
    >
      <option data-testid="All-option" value="">All</option>
      { newArrMeals
        .map((foods, index) => (
          <option
            data-testid={ `${foods.strArea}-option` }
            key={ index }
            value={ foods.strArea }
          >
            { foods.strArea }
          </option>)) }
    </select>
  );

  const createRecipeCards = () => {
    if (meals.length > EMPTY) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ valueCountry !== '' ? pesquisaArray : meals }
            type="Meal"
            dataID="recipe-card"
            MAX_ELEMENTS={ 12 }
          />
        </Row>
      );
    }
  };

  const createSearchRecipeCards = () => {
    if (dataSearchMeals.length > EMPTY) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ valueCountry !== '' ? pesquisaArray : meals }
            type="Meal"
            dataID="recipe-card"
            MAX_ELEMENTS={ 12 }
          />
        </Row>
      );
    }
  };

  const standardReturnElements = (
    <>
      <Header pagename="Explorar Origem" completeSearch />
      { createCategoryButtons() }
      { isSearch ? createSearchRecipeCards() : createRecipeCards() }
      <Footer />
    </>
  );

  return loading ? <Loading /> : standardReturnElements;
}
