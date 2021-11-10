import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppProvider';
import CategoryButtons from '../components/CategoryButtons';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Drinks() {
  const {
    fetchCategoriesAndRecipes,
    drinkCategories,
    drinks,
    loading,
    selectedCategory,
    dataSearchDrinks,
    isSearch,
  } = useAppContext();
  const EMPTY = 0;

  useEffect(() => {
    fetchCategoriesAndRecipes('drinks');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const createCategoryButtons = () => {
    if (drinkCategories.length > EMPTY) {
      return (<CategoryButtons buttonsData={ drinkCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (drinks.length > EMPTY) {
      return (
        <RecipeCards
          cardsData={ drinks }
          type="Drink"
          dataID="recipe-card"
        />);
    }
  };

  const createSearchRecipeCards = () => {
    if (dataSearchDrinks.length > EMPTY) {
      return (
        <RecipeCards
          cardsData={ dataSearchDrinks }
          type="Drink"
          dataID="recipe-card"
        />
      );
    }
  };

  const standardReturnElements = (
    <>
      <Header pagename="Bebidas" completeSearch />
      { createCategoryButtons() }
      { isSearch ? createSearchRecipeCards() : createRecipeCards() }
      <Footer />
    </>
  );

  return loading ? <Loading /> : standardReturnElements;
}
