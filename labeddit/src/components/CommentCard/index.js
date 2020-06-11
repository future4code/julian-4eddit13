import React, { useContext } from 'react';
import {
  CommentCardContainer,
  CommentCardTitle,
  CommentCardInteractionWrapper,
  CommentCardVoteWrapper,
  CommentCardIconButton,
  ThumbUpIcon,
  ThumbDownIcon
} from './style';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const CommentCard = (props) => {

  const { id, text, username, votesCount, userVoteDirection, createdAt } = props.comment;

  const [refresh, setRefresh] = props.refreshArray;

  const baseUrl = useContext(UrlContext);

  const addVote = direction => {
    const token = window.localStorage.getItem('token'); 
    const body = {
      "direction": (userVoteDirection === 0 ? direction : direction - userVoteDirection)
    }
    axios.put(`${baseUrl}/posts/${props.postId}/comments/${id}/vote`, body, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setRefresh(!refresh)
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  };

  return (
    <CommentCardContainer>
      <CommentCardTitle>{username}</CommentCardTitle>
      <p>{text}</p>
      <CommentCardInteractionWrapper>
        <CommentCardVoteWrapper>
          <CommentCardIconButton 
            onClick={() => addVote(-1)}
            size='small'
            color='secondary'
          >
            <ThumbDownIcon />
          </CommentCardIconButton>
          {votesCount}
          <CommentCardIconButton 
            onClick={() => addVote(1)}
            size='small'
            color='primary'
          >
            <ThumbUpIcon />
          </CommentCardIconButton>
        </CommentCardVoteWrapper>
      </CommentCardInteractionWrapper>
    </CommentCardContainer>
  )
}

export default CommentCard