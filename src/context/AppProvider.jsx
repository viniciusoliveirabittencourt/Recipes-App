import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export function AppProvider({ children }) {
  const [dataSearchMeals, setDataSearchMeals] = useState([]);
  const [dataSearchDrinks, setDataSearchDrinks] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [selectedCategoryMeals, setSelectedCategoryMeals] = useState('search.php?s=');
  const [selectedCategoryDrinks, setSelectedCategoryDrinks] = useState('search.php?s=');
  const [loading, setLoading] = useState(false);

  const requestFromApi = async (url) => {
    const fetchData = await fetch(url);
    const endpointObject = await fetchData.json();
    return endpointObject;
  };

  const fetchCategoriesAndRecipes = async (type) => {
    setLoading(true);

    const typeIsMeals = type === 'meals';
    const category = typeIsMeals ? selectedCategoryMeals : selectedCategoryDrinks;
    const mealsPath = 'https://www.themealdb.com/api/json/v1/1/';
    const drinksPath = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const urlType = typeIsMeals ? mealsPath : drinksPath;

    const categories = await requestFromApi(`${urlType}list.php?c=list`);
    const recipes = await requestFromApi(`${urlType}${category}`);

    if (typeIsMeals) {
      setMealCategories(categories[type]);
      setMeals(recipes[type]);
    } else {
      setDrinkCategories(categories[type]);
      setDrinks(recipes[type]);
    }

    setLoading(false);
  };

  const context = {
    dataSearchMeals,
    setDataSearchMeals,
    dataSearchDrinks,
    setDataSearchDrinks,
    isSearch,
    setIsSearch,
    fetchCategoriesAndRecipes,
    loading,
    mealCategories,
    meals,
    drinkCategories,
    drinks,
    selectedCategoryMeals,
    setSelectedCategoryMeals,
    selectedCategoryDrinks,
    setSelectedCategoryDrinks,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) { throw new Error('useAppContext must be used within a AppProvider'); }
  return context;
};
