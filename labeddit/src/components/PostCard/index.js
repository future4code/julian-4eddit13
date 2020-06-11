import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  PostCardContainer
} from './style';

const PostCard = (props) => {

  const { id, title, text, username, votesCount, commentsCount, userVoteDirection, createdAt } = props.post;

  const history = useHistory();

  const goToPostPage = (postId) => {
    history.push(`/${postId}`);
  }

  return (
    <PostCardContainer onClick={() => goToPostPage(id)} >
      <h3>{username} - {title}</h3>
      <p>{text}</p>
    </PostCardContainer>
  )
}

export default PostCard