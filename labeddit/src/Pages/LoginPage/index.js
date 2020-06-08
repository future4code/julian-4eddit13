import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginPageContainer,
  LoginFormContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const LoginPage = (props) => {

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const goToPrivateArea = (event) => {
    event.preventDefault();
    history.push('/posts');
    // const body = {
    //   'email': email,
    //   'password': password
    // }
    // axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`, body)
    // .then(response => {
    //   window.localStorage.setItem('token', response.data.token);
    //   history.push('/posts');
    //   resetForm();
    // })
    // .catch(error => {
    //   console.log(error);
    //   window.alert('Não foi possível acessar')
    // })
  }

  const goToSignUp = () => {
    history.push('/signup');
  }

  return (
    <LoginPageContainer>
      <Header />
      <LoginFormContainer onSubmit={goToPrivateArea} >
        <button type='submit' >Acessar</button>
        <button onClick={goToSignUp} >Cadastrar</button>
      </LoginFormContainer>
      <Footer />
    </LoginPageContainer>
  )
}

export default LoginPage;