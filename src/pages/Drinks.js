import React, { useEffect } from 'react';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useAppContext } from '../context/AppProvider';
import CategoryButtons from '../components/CategoryButtons';
import Header from '../components/Header';

export default function Drinks() {
  const {
    fetchCategoriesAndRecipes, drinkCategories, drinks, loading, selectedCategory,
  } = useAppContext();
  const EMPTY = 0;

  useEffect(() => {
    fetchCategoriesAndRecipes('drinks');
  }, [selectedCategory]);

  const createCategoryButtons = () => {
    if (drinkCategories.length > EMPTY) {
      return (<CategoryButtons buttonsData={ drinkCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (drinks.length > EMPTY) {
      return (<RecipeCards cardsData={ drinks } type="Drink" />);
    }
  };

  const standardReturnElements = (
    <div>
      <p>Bebidas</p>
      <Header />
      { createCategoryButtons() }
      { createRecipeCards() }
      <Footer />
    </div>
  );

  return loading ? <Loading /> : standardReturnElements;
}
