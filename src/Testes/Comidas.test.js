import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
// import Meals from '../../cypress/mocks/meals';

describe('testes da tela de comidas', () => {
  test('esta na rota /comidas? ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    expect(history.location.pathname).toBe('/comidas');

    const title = screen.getByText('Comidas');
    expect(title).toBeInTheDocument();

    const profileIcon = screen.getByAltText('profile icon');
    expect(profileIcon).toBeInTheDocument();

    const searchIcon = screen.getByAltText('search icon');
    expect(searchIcon).toBeInTheDocument();
  });
});

describe('testa os botoes da tela de comida', () => {
  // const dezmil = 30000;
  test('se tem os botões', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');

    const buttonAll = await screen.findByTestId('All-category-filter');
    expect(buttonAll).toBeInTheDocument();

    const btnBeef = await screen.findByTestId('Beef-category-filter');
    expect(btnBeef).toBeInTheDocument();

    const btnBreakfast = await screen.findByTestId('Breakfast-category-filter');
    expect(btnBreakfast).toBeInTheDocument();

    const btnChicken = await screen.findByTestId('Chicken-category-filter');
    expect(btnChicken).toBeInTheDocument();

    const btnDessert = await screen.findByTestId('Dessert-category-filter');
    expect(btnDessert).toBeInTheDocument();

    const btnGoat = await screen.findByTestId('Goat-category-filter');
    expect(btnGoat).toBeInTheDocument();
  });
});

// describe('Testa a requisição de comidas', () => {
//   test('Existem 12 pratos', async () => {
//     const { history } = renderWithRouter(<App />);
//     history.push('/comidas');

//     jest.spyOn(global, 'fetch');
//     global.fetch.mockResolvedValue({
//       json: jest.fn().mockResolvedValue(Meals),
//     });

//     const doze = 12;
//     const checkFirstMeals = (meals, limit = doze) => {
//       meals.slice(0, limit).forEach(meal, (index) => {
//         screen.findAllByTestId(`[${index}-recipe-card]`);
//       });
//     };
//   });
// });

// descobrir como passar o provider para o renderwithrouter
