import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import CardDetailsFoods from '../components/CardDetailsFoods';
import useFetch from '../hooks/useFetch';

function DetailsFood() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, 'meals');

  return (
    <section>
      { loading ? <Loading /> : data.map((meal, index) => (
        <CardDetailsFoods
          key={ index }
          recipeMeal={ meal }
        />
      ))}
    </section>
  );
}

export default DetailsFood;
