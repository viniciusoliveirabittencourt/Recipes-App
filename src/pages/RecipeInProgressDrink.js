import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import InProgressBody from '../components/InProgressBody';
import InProgressFooter from '../components/InProgressFooter';
import InProgressHeader from '../components/InProgressHeader';
import Loading from '../components/Loading';

export default function RecipeInProgressDrink() {
  const location = useLocation();
  const id = location.pathname.replace('/bebidas/', '').replace('/in-progress', '');

  let initialCheckboxValue = [];
  const localStorageValue = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (localStorageValue && localStorageValue.cocktails[id]) {
    initialCheckboxValue = localStorageValue.cocktails[id];
  }

  const [checkboxState, setCheckboxState] = useState(initialCheckboxValue);
  const [disableDoneButton, setDisableDoneButton] = useState(true);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data, loading } = useFetch(url, 'drinks');
  const recipeObject = data.length > 0 ? data[0] : data;

  const history = useHistory();
  const changePath = () => { history.push('/receitas-feitas'); };

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
        changePath={ changePath }
        doneButtonIsDisabled={ disableDoneButton }
      />
    </div>
  );
}

RecipeInProgressDrink.propTypes = {
  recipeObject: PropTypes.object,
}.isRequired;
