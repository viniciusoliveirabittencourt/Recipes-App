import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header pagename="Receitas Favoritas" completeSearch={ false } />
      <p>Tela de receitas favoritas.</p>
    </div>
  );
}

export default FavoriteRecipes;
