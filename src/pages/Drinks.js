import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useAppContext } from '../context/AppProvider';
import RecipeCards from '../components/RecipeCards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import CategoryButtonsDrinks from '../components/CategoryButtonsDrinks';

export default function Drinks() {
  const {
    fetchCategoriesAndRecipes,
    drinkCategories,
    drinks,
    loading,
    selectedCategoryDrinks,
    dataSearchDrinks,
    isSearch,
    ingredientsPage,
  } = useAppContext();

  useEffect(() => {
    if (searchByIngredient) {
      fetchCategoriesAndRecipes('drinks');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryDrinks]);

  const createCategoryButtons = () => {
    if (drinkCategories.length > 0) {
      return (<CategoryButtonsDrinks buttonsData={ drinkCategories } />);
    }
  };

  const createRecipeCards = () => {
    if (drinks.length > 0 || ingredientsPage) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ drinks }
            type="Drink"
            dataID="recipe-card"
            MAX_ELEMENTS={ 12 }
          />
        </Row>
      );
    }
  };

  const createSearchRecipeCards = () => {
    if (dataSearchDrinks.length > 0) {
      return (
        <Row xs={ 2 } md={ 2 } className="g-2" as="section">
          <RecipeCards
            cardsData={ dataSearchDrinks }
            type="Drink"
            dataID="recipe-card"
            MAX_ELEMENTS={ 12 }
          />
        </Row>
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
