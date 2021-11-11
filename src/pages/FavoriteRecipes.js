import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CardFavoriteRecipe from '../components/CardFavoriteRecipe';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';

function FavoriteRecipes() {
  const location = useLocation();
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [filterFavorites, setFilterFavorites] = useState(getFavoriteRecipes);

  function typeRecipe(recipe, index) {
    switch (recipe.type) {
    case 'comida':
      return (
        <CardFavoriteRecipe
          key={ index }
          index={ index }
          pathname={ location.pathname }
          recipe={ recipe }
          type="comida"
        />
      );
    case 'bebida':
      return (
        <CardFavoriteRecipe
          key={ index }
          index={ index }
          pathname={ location.pathname }
          recipe={ recipe }
          type="bebida"
        />
      );
    default:
      return null;
    }
  }
  return (
    <div>
      <Header pagename="Receitas Favoritas" completeSearch={ false } />
      <FilterButtons
        favoriteRecipes={ getFavoriteRecipes }
        onSetFilterFavorites={ setFilterFavorites }
      />
      { filterFavorites.length === 0 ? (
        <Card.Text>
          Nenhum receita favorita encontrada!
        </Card.Text>)
        : filterFavorites.map((recipe, index) => typeRecipe(recipe, index))}
    </div>
  );
}

export default FavoriteRecipes;
