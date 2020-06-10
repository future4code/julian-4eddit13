import React, { useContext } from 'react';
import {
  CreatePostContainer,
  CreatePostWrapper, 
  CreatePostFormControl,
  CreatePostTextfield,
  CreatePostButton,
  CreatePostTittle
} from './style';
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


const CreatePost = (props) => {
  
  const { form, onChange, resetForm } = useForm({
    text: '',
    title: ''
  });

  const { text, title } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const baseUrl = useContext(UrlContext);

  const addPost = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const body = {
      'title': title,
      'text': text
    }
    axios.post(`${baseUrl}/posts`, body, {
      headers: {  
        Authorization: token
      }
    })
    .then(response => {
      console.log(response);
      resetForm();
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <CreatePostContainer onSubmit={addPost} >
      <MuiThemeProvider theme={MyTheme}>
      <CreatePostWrapper>
        <CreatePostFormControl>
          <CreatePostTittle 
            color="secondary"
            name='title'
            value={title}
            label='Título do post'
            onChange={handleInputChange}
          />
        </CreatePostFormControl>
        <CreatePostFormControl>
          <CreatePostTextfield 
            color="secondary"
            name='text'
            value={text}
            label='Escreva seu post'
            onChange={handleInputChange}
          />
        </CreatePostFormControl>
      </CreatePostWrapper>
      <CreatePostButton 
            size='small'
            variant="contained"
            color="secondary"
            type='submit' >
            Publicar
        </CreatePostButton>
      </MuiThemeProvider>
    </CreatePostContainer>
  )
}

export default CreatePost;