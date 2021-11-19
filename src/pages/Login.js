import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
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
    const minLength = 7;
    const validation = !(regexEmail.test(email)
      && (password.length >= minLength));
    setDisabled(validation);
  };

  const saveInLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('/comidas');
  };

  useEffect(() => {
    validateEmailAndPassword();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // console.log()
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
          isrequired="true"
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
          isrequired="true"
        />
      </label>
      <Button
        variant="success"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ saveInLocalStorage }
      >
        Entrar
      </Button>
    </form>
  );
}

export default Login;
