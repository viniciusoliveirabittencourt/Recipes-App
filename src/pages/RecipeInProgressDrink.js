import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import InProgressBody from '../components/InProgressBody';
import InProgressFooter from '../components/InProgressFooter';
import InProgressHeader from '../components/InProgressHeader';
import Loading from '../components/Loading';

const createNewArray = (object, string) => {
  const keys = Object.keys(object).filter((key) => key.includes(string));
  const array = [];
  keys.forEach((key) => {
    if (object[key] && object[key] !== '') {
      array.push(object[key]);
    }
  });
  return array;
};

export default function RecipeInProgressDrink() {
  const id = useLocation().pathname.replace('/bebidas/', '').replace('/in-progress', '');
  const storedValue = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const initialCheckboxValue = storedValue
    && storedValue.cocktails[id] ? storedValue.cocktails[id] : [];
  const [checkboxState, setCheckboxState] = useState(initialCheckboxValue);

  const [disableDoneButton, setDisableDoneButton] = useState(true);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, loading } = useFetch(url, 'drinks');
  const recipeObject = data.length > 0 ? data[0] : data;

  const handleCheckbox = (ingredient) => {
    const newCheckboxValue = [...checkboxState];
    if (newCheckboxValue.includes(ingredient)) {
      newCheckboxValue.splice(newCheckboxValue.indexOf(ingredient), 1);
    } else {
      newCheckboxValue.push(ingredient);
    }
    setCheckboxState(newCheckboxValue);
    const savedProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const newProgress = savedProgress
      ? { ...savedProgress } : { cocktails: {}, meals: {} };
    newProgress.cocktails[id] = newCheckboxValue;
    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgress));
  };

  const ingredientsArray = createNewArray(recipeObject, 'Ingredient');
  const measuresArray = createNewArray(recipeObject, 'Measure');
  const ingredientsAndMeasures = ingredientsArray
    .map((ingredient, index) => `${ingredient} - ${measuresArray[index]}`);

  const shouldButtonBeEnabled = checkboxState.length === ingredientsAndMeasures.length;
  if (shouldButtonBeEnabled && disableDoneButton) {
    setDisableDoneButton(false);
  } else if (!shouldButtonBeEnabled && !disableDoneButton) {
    setDisableDoneButton(true);
  }

  if (loading) { return <Loading />; }

  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      <InProgressHeader recipeObject={ recipeObject } type="Drink" />
      <InProgressBody
        recipeObject={ recipeObject }
        ingredientsAndMeasures={ ingredientsAndMeasures }
        handleCheckbox={ handleCheckbox }
        checkboxState={ checkboxState }
      />
      <InProgressFooter
        doneButtonIsDisabled={ disableDoneButton }
      />
    </div>
  );
}

RecipeInProgressDrink.propTypes = {
  recipeObject: PropTypes.object,
}.isRequired;
