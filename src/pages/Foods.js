import React, { useEffect } from 'react';
import RecipeCards from '../components/RecipeCards';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useAppContext } from '../context/AppProvider';
import CategoryButtons from '../components/CategoryButtons';
import Header from '../components/Header';

export default function Foods() {
  const {
    fetchCategoriesAndRecipes, mealCategories, meals, loading, selectedCategory,
  } = useAppContext();
  const EMPTY = 0;

  useEffect(() => {
    fetchCategoriesAndRecipes('meals');
  }, [selectedCategory]);

  const createCategoryButtons = () => {
    if (mealCategories.length > EMPTY) {
      return (<CategoryButtons buttonsData={ mealCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (meals.length > EMPTY) {
      return (<RecipeCards cardsData={ meals } type="Meal" />);
    }
  };

  const standardReturnElements = (
    <div>
      <Header pagename="Comidas" completeSearch />
      <p>Tela de Comida</p>

      { createCategoryButtons() }
      { createRecipeCards() }
      <Footer />
    </div>
  );

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
