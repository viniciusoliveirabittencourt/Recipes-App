import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div>
      <Header pagename="Perfil" completeSearch={ false } />
      <p>Tela de Perfil</p>
      <Footer />
    </div>
  );
}

export default Profile;
