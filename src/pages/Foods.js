import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useAppContext } from '../context/AppProvider';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import CategoryButtonsMeals from '../components/CategoryButtonsMeals';

export default function Foods() {
  const {
    fetchCategoriesAndRecipes,
    mealCategories,
    meals,
    loading,
    selectedCategoryMeals,
    dataSearchMeals,
    isSearch,
  } = useAppContext();

  useEffect(() => {
    fetchCategoriesAndRecipes('meals');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryMeals]);

  const createCategoryButtons = () => {
    if (mealCategories.length > 0) {
      return (<CategoryButtonsMeals buttonsData={ mealCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (meals.length > 0) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ meals }
            type="Meal"
            dataID="recipe-card"
            MAX_ELEMENTS={ 12 }
          />
        </Row>
      );
    }
  };

  const createSearchRecipeCards = () => {
    if (dataSearchMeals.length > 0) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ dataSearchMeals }
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
      <Header pagename="Comidas" completeSearch />
      { createCategoryButtons() }
      { isSearch ? createSearchRecipeCards() : createRecipeCards() }
      <Footer />
    </>
  );

  return loading ? <Loading /> : standardReturnElements;
}
