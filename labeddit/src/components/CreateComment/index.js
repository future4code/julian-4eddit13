import React, { useContext } from 'react';
import {
  CreateCommentContainer,
  CreateCommentWrapper, 
  CreateCommentFormControl,
  CreateCommentTextfield,
  CreateCommentButton
} from './style';
import { useForm } from '../../hooks/useForm';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const CreateComment = (props) => {
  
  const { form, onChange, resetForm } = useForm({
    text: ''
  });

  const { text } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const baseUrl = useContext(UrlContext);

  const addPost = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const body = {
      'text': text
    }
    axios.post(`${baseUrl}/posts/${props.postId}`, body, {
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
    <CreateCommentContainer onSubmit={addPost} >
      <CreateCommentWrapper>
        <CreateCommentFormControl>
          <CreateCommentTextfield 
            name='text'
            value={text}
            label='Escreva seu comentário'
            onChange={handleInputChange}
          />
        </CreateCommentFormControl>
        <CreateCommentButton type='submit' >Comentar</CreateCommentButton>
      </CreateCommentWrapper>
    </CreateCommentContainer>
  )
}

export default CreateComment;