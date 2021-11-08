import React from 'react';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function Drinks() {
  return (
    <div>
      <p>Tela de Bebidas</p>
      <SearchBar isActive="drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
