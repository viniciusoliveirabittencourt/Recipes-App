import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testes relacionados ao login', () => {
  test('Existe o campo de login', () => {
    const { history } = renderWithRouter(<App />);

    const loginInput = screen.getByTestId('email-input');
    expect(loginInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();

    const button = screen.getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();

    userEvent.type(loginInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(button);

    history.push('/comidas');

    expect(history.location.pathname).toBe('/comidas');
  });
});
