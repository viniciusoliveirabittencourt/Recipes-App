import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppProvider';
import CategoryButtons from '../components/CategoryButtons';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Drinks() {
  const {
    fetchCategoriesAndRecipes, drinkCategories,
    drinks, loading, selectedCategory,
  } = useAppContext();

  useEffect(() => {
    fetchCategoriesAndRecipes('drinks');
  }, [selectedCategory]);

  const createCategoryButtons = () => {
    if (drinkCategories.length > 0) {
      return (<CategoryButtons buttonsData={ drinkCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (drinks.length > 0) {
      return (<RecipeCards cardsData={ drinks } type="Drink" />);
    }
  };

  const standardReturnElements = (
    <div>
      <Header pagename="Comidas" completeSearch />
      { createCategoryButtons() }
      { createRecipeCards() }
      <Footer />
    </div>
  );

  return loading ? <Loading /> : standardReturnElements;
}
