import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppProvider';
import CategoryButtons from '../components/CategoryButtons';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Foods() {
  const {
    fetchCategoriesAndRecipes, mealCategories,
    meals, loading, selectedCategory,
  } = useAppContext();

  useEffect(() => {
    fetchCategoriesAndRecipes('meals');
  }, [selectedCategory]);

  const createCategoryButtons = () => {
    if (mealCategories.length > 0) {
      return (<CategoryButtons buttonsData={ mealCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (meals.length > 0) {
      return (<RecipeCards cardsData={ meals } type="Meal" />);
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
