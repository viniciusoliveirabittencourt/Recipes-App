import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Login() {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (value, id) => {
    setLoginState({
      ...loginState,
      [id]: value,
    });
  };

  const { email, password } = loginState;

  return (
    <form>
      <label htmlFor="email">
        E-mail: 
        <input
          id="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ ({ target: { value, id } }) => handleChange(value, id) }
          placeholder="Insira seu e-mail"
        />
      </label>
      <label htmlFor="password">
        Senha: 
        <input
          id="password"
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ ({ target: { value, id } }) => handleChange(value, id) }
          placeholder="Insira sua senha"
        />
      </label>
      <Button variant="success" data-testid="login-submit-btn">Entrar</Button>
    </form>
  );
}

export default Login;
