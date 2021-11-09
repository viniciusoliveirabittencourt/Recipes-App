import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinksByIngredients() {
  return (
    <div>
      <Header pagename="Explorar Ingredientes" completeSearch={ false } />
      <p>Tela de explorar bebidas por ingrediente</p>
      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
