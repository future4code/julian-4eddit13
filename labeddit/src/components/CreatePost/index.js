import React, { useContext } from 'react';
import {
  CreatePostContainer,
  CreatePostWrapper, 
  CreatePostFormControl,
  CreatePostTextfield,
  CreatePostButton
} from './style';
import { useForm } from '../../hooks/useForm';
import { UrlContext } from '../../contexts/UrlContext';
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
      <CreatePostWrapper>
        <CreatePostFormControl>
          <CreatePostTextfield 
            name='title'
            value={title}
            label='Título do post'
            onChange={handleInputChange}
          />
        </CreatePostFormControl>
        <CreatePostFormControl>
          <CreatePostTextfield 
            name='text'
            value={text}
            label='Escreva seu post'
            onChange={handleInputChange}
          />
        </CreatePostFormControl>
        <CreatePostButton type='submit' >Publicar</CreatePostButton>
      </CreatePostWrapper>
    </CreatePostContainer>
  )
}

export default CreatePost;