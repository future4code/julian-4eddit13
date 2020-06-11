import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PostCardContainer
} from './style';
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { UrlContext } from '../../contexts/UrlContext';



const PostCard = (props) => {
  
  const [direction, setDirection] = useState(0);
  
  
  const { id, title, text, username, votesCount, commentsCount, userVoteDirection, createdAt } = props.post;

  const history = useHistory();

  const goToPostPage = (postId) => {
    history.push(`/${postId}`);
  }

  const baseUrl = useContext(UrlContext);

  const likeAndDeslike = signal => {
    const token = window.localStorage.getItem('token') 
    signal === "+" ? setDirection( 1 ) : setDirection(- 1) 
    console.log(direction)
    const body = {
      "direction": direction
    }
    axios.put(`${baseUrl}/posts/${id}/vote`, body, {
      headers: {
        Authorization: token
      }
    }).then((response) => {
      props.setRefreshList(!props.refreshList)
      console.log(response)
    }).catch((err) => {
      console.error(err)
    })

  };

  return (

    <PostCardContainer >
      <h3 onClick={() => goToPostPage(id)} >{username} - {title}</h3>
      <p>{text}</p>
      
      <Button 
        onClick={() => likeAndDeslike("-")}
        size='small'
        variant="contained" 
        color="secondary">
         Deslike
      </Button>
      {votesCount}
      <Button 
        onClick={() => likeAndDeslike("+")}
        size='small'
        variant="contained" 
        color="primary">
        like
      </Button>
    </PostCardContainer>
  )
}

export default PostCard