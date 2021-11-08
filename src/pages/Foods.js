import React from 'react';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function Foods() {
  return (
    <div>
      <p>Tela de Comida</p>
      <SearchBar isActive="meals" />
      <Footer />
    </div>
  );
}

export default Foods;
