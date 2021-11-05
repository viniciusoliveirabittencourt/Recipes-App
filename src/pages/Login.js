import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';

function Login() {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { email, password } = loginState;

  const handleChange = (value, id) => {
    setLoginState({
      ...loginState,
      [id]: value,
    });
  };

  const validateEmailAndPassword = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const passLength = 6;
    const validation = !(regexEmail.test(email)
      && (password.length > passLength));
    setDisabled(validation);
  };

  const handleSubmit = () => {
    localStorage.setItem('email', email);
    return <Redirect to="/comida" />;
  };

  useEffect(() => {
    validateEmailAndPassword();
  }, [loginState]);

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
      <Button
        variant="success"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleSubmit }
      >
        Entrar
      </Button>
    </form>
  );
}

export default Login;
