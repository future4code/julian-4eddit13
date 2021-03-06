import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  SignUpPageContainer,
  SignUpFormContainer,
  SignUpFormControl,
  SignUpTextField,
  SignUpButtonWrapper,
  SignUpButton
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  useForm,
  useFeedPage 
} from '../../hooks/hooks';
import { UrlContext } from '../../contexts/contexts';
import axios from 'axios';

const SignUpPage = (props) => {

  useFeedPage();

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: '',
    username: ''
  })

  const { email, password, username } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const baseUrl = useContext(UrlContext);

  const goToPrivateArea = (event) => {
    event.preventDefault();
    const body = { email, password, username }
    axios.post(`${baseUrl}/signup`, body)
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

  return (
    <SignUpPageContainer>
      <Header />
      <SignUpFormContainer onSubmit={goToPrivateArea} >
        <SignUpFormControl>
          <SignUpTextField 
            color="secondary"
            name='username'
            value={username}
            label={'Nome de usuário'}
            onChange={handleInputChange}
            type='text'
            variant='outlined'
            required
          />
        </SignUpFormControl>
        <SignUpFormControl>
          <SignUpTextField 
            color="secondary"
            name='email'
            value={email}
            label={'E-mail'}
            onChange={handleInputChange}
            type='email'
            variant='outlined'
            required
          />
        </SignUpFormControl>
        <SignUpFormControl>
          <SignUpTextField 
            color="secondary"
            name='password'
            value={password}
            label={'Senha'}
            onChange={handleInputChange}
            type='password'
            variant='outlined'
            required
          />
        </SignUpFormControl>
        <SignUpButtonWrapper>
          <SignUpButton 
            type='submit' 
            size='small'
            variant="contained"
            color="secondary"
          >
            Acessar
          </SignUpButton>
        </SignUpButtonWrapper>
      </SignUpFormContainer>
      <Footer />
    </SignUpPageContainer>
  )
}

export default SignUpPage;