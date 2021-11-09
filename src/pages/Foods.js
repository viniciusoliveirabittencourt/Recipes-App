import React from 'react';
import { Row } from 'react-bootstrap';
import { useAppContext } from '../context/AppProvider';
import CardMeals from '../components/CardMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/foods.css';

const LIMIT_OF_MEALS = 12;

export default function Foods() {
  const { dataMeals } = useAppContext();
  return (
    <div>
      <Header pagename="Comidas" completeSearch />
      <p>Tela de Comida</p>
      <Header />
      <Row xs={ 2 } sm={ 3 } className="g-4" as="section">
        { dataMeals && dataMeals.slice(0, LIMIT_OF_MEALS).map((meal, index) => (
          <CardMeals key={ meal.idMeal } meal={ meal } index={ index } />
        ))}
      </Row>
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
