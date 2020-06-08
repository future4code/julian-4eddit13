import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SignUpPageContainer,
  SignUpFormContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const SignUpPage = (props) => {

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: '',
    username: ''
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
    //   'password': password,
    //   'username': username
    // }
    // axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`, body)
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

  return (
    <SignUpPageContainer>
      <Header />
      <SignUpFormContainer onSubmit={goToPrivateArea} >
        <button type='submit' >Acessar</button>
      </SignUpFormContainer>
      <Footer />
    </SignUpPageContainer>
  )
}

export default SignUpPage;