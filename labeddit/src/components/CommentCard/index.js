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
import { useFormatDate } from '../../hooks/hooks';
import {
  UrlContext,
  RefreshContext
} from '../../contexts/contexts';
import axios from 'axios';

const CommentCard = (props) => {

  const { id, text, username, votesCount, userVoteDirection, createdAt } = props.comment;

  const baseUrl = useContext(UrlContext);

  const { refresh, setRefresh } = useContext(RefreshContext);

  const addComment = direction => {
    const token = window.localStorage.getItem('token'); 
    const body = {
      "direction": (!userVoteDirection ? direction : direction - userVoteDirection)
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
      <p>{useFormatDate(createdAt)}</p>
      <CommentCardInteractionWrapper>
        <CommentCardVoteWrapper>
          <CommentCardIconButton 
            onClick={() => addComment(-1)}
            size='small'
            color='secondary'
          >
            <ThumbDownIcon />
          </CommentCardIconButton>
          {votesCount}
          <CommentCardIconButton 
            onClick={() => addComment(1)}
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