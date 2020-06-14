import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PostCardContainer,
  PostCardTitle,
  PostCardInteractionWrapper,
  PostCardVoteWrapper,
  PostCardCommentWrapper,
  PostCardIconButton,
  ThumbUpIcon,
  ThumbDownIcon
} from './style';
import { useFormatDate } from '../../hooks/hooks';
import {
  UrlContext,
  RefreshContext
} from '../../contexts/contexts';
import axios from 'axios';

const PostCard = (props) => {
  
  const { id, title, text, username, votesCount, commentsCount, userVoteDirection, createdAt } = props.post;

  const baseUrl = useContext(UrlContext);

  const { refresh, setRefresh } = useContext(RefreshContext);

  const history = useHistory();

  const goToPostPage = (postId) => {
    history.push(`/${postId}`);
  }

  const addVote = direction => {
    const token = window.localStorage.getItem('token'); 
    const body = {
      "direction": (!userVoteDirection ? direction : direction - userVoteDirection)
    }
    axios.put(`${baseUrl}/posts/${id}/vote`, body, {
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

    <PostCardContainer>
      {history.location.pathname === '/home' ? 
        <PostCardTitle onClick={() => goToPostPage(id)} style={{ cursor: 'pointer' }} >{username} - {title}</PostCardTitle> :
        <PostCardTitle>{username} - {title}</PostCardTitle> }
      <p>{text}</p>
      <p>{useFormatDate(createdAt)}</p>
      <PostCardInteractionWrapper>
        <PostCardVoteWrapper>
          <PostCardIconButton 
            onClick={() => addVote(-1)}
            size='small'
            color='secondary'
          >
            <ThumbDownIcon />
          </PostCardIconButton>
          {votesCount}
          <PostCardIconButton 
            onClick={() => addVote(1)}
            size='small'
            color='primary'
          >
            <ThumbUpIcon />
          </PostCardIconButton>
        </PostCardVoteWrapper>
        <PostCardCommentWrapper>
          {commentsCount} {commentsCount !== 1 ? 'Comentários' : 'Comentário'}
        </PostCardCommentWrapper>
      </PostCardInteractionWrapper>
    </PostCardContainer>
  )
}

export default PostCard