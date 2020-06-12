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
import { RefreshContext } from '../../contexts/RefreshContext';
import axios from 'axios';

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

  const { refresh, setRefresh } = useContext(RefreshContext);

  const addPost = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const body = { title, text }
    axios.post(`${baseUrl}/posts`, body, {
      headers: {  
        Authorization: token
      }
    })
    .then(response => {
      console.log(response);
      setRefresh(!refresh);
      resetForm();
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <CreatePostContainer onSubmit={addPost} >
      <CreatePostWrapper>
        <CreatePostFormControl>
          <CreatePostTittle 
            color="secondary"
            name='title'
            value={title}
            label='Título do post'
            onChange={handleInputChange}
            variant='outlined'
            require
          />
        </CreatePostFormControl>
        <CreatePostFormControl>
          <CreatePostTextfield 
            color="secondary"
            name='text'
            value={text}
            label='Escreva seu post'
            onChange={handleInputChange}
            variant='outlined'
            require
          />
        </CreatePostFormControl>
        <CreatePostButton 
          size='small'
          variant="contained"
          color="secondary"
          type='submit' 
        >
          Publicar
        </CreatePostButton>
      </CreatePostWrapper>
    </CreatePostContainer>
  )
}

export default CreatePost;