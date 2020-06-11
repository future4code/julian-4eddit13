import React from 'react';
import {
  CommentCardContainer
} from './style';

const CommentCard = (props) => {

  const { id, text, username, votesCount, createdAt, userVoteDirection } = props.comment

  return (
    <CommentCardContainer>
      <p>{username} - {text}</p>
    </CommentCardContainer>
  )
}

export default CommentCard