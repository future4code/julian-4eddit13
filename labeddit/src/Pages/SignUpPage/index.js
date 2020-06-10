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
import { useForm } from '../../hooks/useForm';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";


const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#71EB1E",
    },
    secondary: {
      main: "#ff9800",
    },
  },
});


const SignUpPage = (props) => {

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
    history.push('/home');
    const body = {
      'email': email,
      'password': password,
      'username': username
    }
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
      <MuiThemeProvider theme={MyTheme}>  
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
          />
        </SignUpFormControl>
        <SignUpButtonWrapper>
          <Button 
            size='small'
            variant="contained" 
            color="secondary" 
            type='submit' 
            >Acessar
          </Button>
        </SignUpButtonWrapper>
      </SignUpFormContainer>
      <Footer />
      </MuiThemeProvider>
    </SignUpPageContainer>
  )
}

export default SignUpPage;