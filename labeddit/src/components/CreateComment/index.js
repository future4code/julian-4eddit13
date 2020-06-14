import React, { useContext } from 'react';
import {
  CreateCommentContainer,
  CreateCommentWrapper, 
  CreateCommentFormControl,
  CreateCommentTextfield,
  CreateCommentButton
} from './style';
import { useForm } from '../../hooks/hooks';
import {
  UrlContext,
  RefreshContext
} from '../../contexts/contexts';
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

  const { refresh, setRefresh } = useContext(RefreshContext);

  const addComment = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const body = { text }
    console.log(token, body, props.postId)
    axios.post(`${baseUrl}/posts/${props.postId}/comment`, body, {
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
    <CreateCommentContainer onSubmit={addComment} >
      <CreateCommentWrapper>
        <CreateCommentFormControl>
          <CreateCommentTextfield 
            name='text'
            value={text}
            label='Escreva seu comentário'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </CreateCommentFormControl>
        <CreateCommentButton type='submit' >Comentar</CreateCommentButton>
      </CreateCommentWrapper>
    </CreateCommentContainer>
  )
}

export default CreateComment;