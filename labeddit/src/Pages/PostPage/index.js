import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  PostPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CommentCard from '../../components/CommentCard';
import { usePrivatePage } from '../../hooks/usePrivatePage';
import axios from 'axios';

const PostPage = (props) => {

  const [postDetail, setPostDetail] = useState({});

  const pathParams = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV5dEdONkVTcGlVdDgweFgwbzBWIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJlbWFpbCI6InBlZHJvLmRhcnZhc0BnbWFpbC5jb20iLCJpYXQiOjE1OTE2MjI0OTd9.4Bewo-Gklruzd8WpyiC6N9Vb7_95TMSPgyZ_3UzWW3k'
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
      {postDetail.title}
      <Footer />
    </PostPageContainer>
  )
}

export default PostPage;