import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import CardDetailsDrinks from '../components/CardDetailsDrinks';
import useFetch from '../hooks/useFetch';

function DetailDrink() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`, 'drinks');

  return (
    <section>
      { loading ? <Loading /> : data.map((drink, index) => (
        <CardDetailsDrinks
          key={ index }
          recipeDrink={ drink }
          index={ index }
        />
      ))}
    </section>
  );
}

export default DetailDrink;
