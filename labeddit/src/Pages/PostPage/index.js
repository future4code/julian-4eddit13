import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  PostPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CommentCard from '../../components/CommentCard';
import CreateComment from '../../components/CreateComment';
import { usePrivatePage } from '../../hooks/usePrivatePage';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const PostPage = (props) => {

  usePrivatePage();

  const [postDetail, setPostDetail] = useState({});

  const pathParams = useParams();

  const history = useHistory();

  const baseUrl = useContext(UrlContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get(`${baseUrl}/posts/${pathParams.postId}`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setPostDetail(response.data.post);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <PostPageContainer>
      <Header />
      <PostCard post={postDetail} />
      <CreateComment postId={pathParams.postId} />
      <Footer />
    </PostPageContainer>
  )
}

export default PostPage;