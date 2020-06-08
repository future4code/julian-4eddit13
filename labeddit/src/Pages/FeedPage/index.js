import React, { useState, useEffect } from 'react';
import {
  FeedPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import { usePrivatePage } from '../../hooks/usePrivatePage';
import axios from 'axios';

const FeedPage = (props) => {

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImV5dEdONkVTcGlVdDgweFgwbzBWIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJlbWFpbCI6InBlZHJvLmRhcnZhc0BnbWFpbC5jb20iLCJpYXQiOjE1OTE2MjI0OTd9.4Bewo-Gklruzd8WpyiC6N9Vb7_95TMSPgyZ_3UzWW3k'
      }
    })
    .then(response => {
      setPostsList(response.data.posts);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <FeedPageContainer>
      <Header />
      {postsList.map(post => {
        return <PostCard key={post.id} post={post} />
      })}
      <Footer />
    </FeedPageContainer>
  )
}

export default FeedPage;