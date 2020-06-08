import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  PostCardContainer
} from './style';

const PostCard = (props) => {

  const history = useHistory();

  const goToPostPage = (postId) => {
    history.push(`/posts/${postId}`);
  }

  return (
    <PostCardContainer onClick={() => goToPostPage(props.post.id)} >
      PostCard
    </PostCardContainer>
  )
}

export default PostCard