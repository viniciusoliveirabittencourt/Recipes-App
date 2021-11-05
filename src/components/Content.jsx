import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailsFood from '../pages/DetailsFood';
import DetailsDrink from '../pages/DetailsDrink';
import InProgressFood from '../pages/InProgressFood';
import InProgressDrink from '../pages/InProgressDrink';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import IngredientsFood from '../pages/IngredientsFood';
import IngredientsDrink from '../pages/IngredientsDrink';
import FoodOrigin from '../pages/FoodOrigin';
import Profile from '../pages/Profile';
import RecipesDone from '../pages/RecipesDone';
import FavoriteRecipes from '../pages/FavoriteRecipes';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:id" component={ DetailsFood } />
      <Route exact path="/bebidas/:id" component={ DetailsDrink } />
      <Route exact path="/comidas/:id/in-progress" component={ InProgressFood } />
      <Route exact path="/bebidas/:id/in-progress" component={ InProgressDrink } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route exact path="/explorar/comidas/ingredientes" component={ IngredientsFood } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ IngredientsDrink } />
      <Route exact path="/explorar/comidas/area" component={ FoodOrigin } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ RecipesDone } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Content;
