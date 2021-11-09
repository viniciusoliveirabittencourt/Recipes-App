import React from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import CardDrinks from '../components/CardDrinks';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppProvider';

const LIMIT_OF_DRINKS = 12;

function Drinks() {
  const { dataDrinks } = useAppContext();
  return (
    <>
      <Header pagename="Bebidas" completeSearch />
      <Row xs={ 2 } sm={ 3 } className="g-4" as="section">
        { dataDrinks && dataDrinks.slice(0, LIMIT_OF_DRINKS).map((drink, index) => (
          <CardDrinks key={ drink.idDrink } drink={ drink } index={ index } />
        ))}
      </Row>
      <Footer />
    </>
  );
}

export default Drinks;
