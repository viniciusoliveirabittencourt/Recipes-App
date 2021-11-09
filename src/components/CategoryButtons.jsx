import React from 'react';
import PropTypes from 'prop-types';
import { useAppContext } from '../context/AppProvider';

export default function CategoryButtons(props) {
  const { setSelectedCategory, selectedCategory } = useAppContext();
  const { buttonsData } = props;
  const STARTING_ON_INDEX_0 = 0;
  const GET_FIVE_ELEMENTS = 5;

  const manipulateCategoryState = (buttonCategory) => {
    if (selectedCategory === buttonCategory) {
      setSelectedCategory('search.php?s=');
    } else {
      setSelectedCategory(buttonCategory);
    }
  };

  return (
    <div
      style={ {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: '15px' } }
    >
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setSelectedCategory('search.php?s=') }
        style={ { width: '32%', margin: '5px 0px' } }
      >
        All
      </button>

      {
        [...buttonsData]
          .splice(STARTING_ON_INDEX_0, GET_FIVE_ELEMENTS)
          .map((buttonData) => (
            <button
              type="button"
              key={ buttonData.strCategory }
              data-testid={ `${buttonData.strCategory}-category-filter` }
              onClick={ () => manipulateCategoryState(
                `filter.php?c=${buttonData.strCategory}`,
              ) }
              style={ { width: '32%', margin: '5px 0px' } }
            >
              { buttonData.strCategory }
            </button>
          ))
      }
    </div>
  );
}

CategoryButtons.propTypes = {
  buttonsData: PropTypes.array,
}.isRequired;
