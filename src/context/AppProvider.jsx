import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export function AppProvider({ children }) {
  const [dataMeals, setDataMeals] = useState([]);
  const [dataDrinks, setDataDrinks] = useState([]);

  const context = {
    dataMeals,
    setDataMeals,
    dataDrinks,
    setDataDrinks,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
