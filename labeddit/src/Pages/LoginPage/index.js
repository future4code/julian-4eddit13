import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginPageContainer,
  LoginFormContainer,
  LoginFormControl,
  LoginTextField,
  LoginButtonWrapper,
  LoginButton
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useForm } from '../../hooks/useForm';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const LoginPage = (props) => {

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const baseUrl = useContext(UrlContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      history.push('/home');
    }
  }, [history]);

  const goToPrivateArea = (event) => {
    event.preventDefault();
    const body = { email, password }
    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('username', response.data.user.username);
      history.push('/home');
      resetForm();
    })
    .catch(error => {
      console.log(error);
      window.alert('Não foi possível acessar')
    })
  }

  const goToSignUp = () => {
    history.push('/signup');
  }

  return (
    <LoginPageContainer>
      <Header />
      <LoginFormContainer onSubmit={goToPrivateArea} >
        <LoginFormControl>
          <LoginTextField 
            color="secondary"
            name='email'
            value={email}
            label={'E-mail'}
            onChange={handleInputChange}
            type='email'
            variant='outlined'
            required
          />
        </LoginFormControl>
        <LoginFormControl>
          <LoginTextField 
            color="secondary"
            name='password'
            value={password}
            label={'Senha'}
            onChange={handleInputChange}
            type='password'
            variant='outlined'
            required
          />
        </LoginFormControl>
        <LoginButtonWrapper>
          <LoginButton 
            type='submit' 
            size='small'
            variant="contained"
            color="secondary"
          >
            Acessar
          </LoginButton>
          <LoginButton 
            color="secondary"
            onClick={goToSignUp} 
          >
            Cadastrar
          </LoginButton>
        </LoginButtonWrapper>
      </LoginFormContainer>
      <Footer />
    </LoginPageContainer>
  )
}

export default LoginPage;