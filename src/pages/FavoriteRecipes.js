import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import LikeButton from '../components/LikeButton';
import ShareButton from '../components/ShareButton';

function FavoriteRecipes() {
  const location = useLocation();
  const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const [filterFavorites, setFilterFavorites] = useState(getFavoriteRecipes);
  console.log(getFavoriteRecipes);
  console.log(filterFavorites);
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
        : filterFavorites.map((recipe, index) => (
          <Card key={ recipe.id }>
            <Card.Img
              variant="top"
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
            />
            <Card.Body className="card_title">
              <div>
                <Card.Title data-testid="recipe-title">{ recipe.name }</Card.Title>
                <Card.Text
                  data-testid={ `${index}-horizontal-name` }
                >
                  { recipe.category }
                </Card.Text>
              </div>
              <div>
                <LikeButton
                  id={ recipe.id }
                  type="bebida"
                  recipe={ recipe }
                  dataID={ `${index}-horizontal-share-btn` }
                />
                <ShareButton
                  pathname={ location.pathname }
                  dataID={ `${index}-horizontal-favorite-btn` }
                />
              </div>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default FavoriteRecipes;
