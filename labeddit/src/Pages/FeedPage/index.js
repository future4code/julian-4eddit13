import React, { useState, useEffect, useContext } from 'react';
import {
  FeedPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import { usePrivatePage } from '../../hooks/usePrivatePage';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const FeedPage = (props) => {

  const [postsList, setPostsList] = useState([]);

  const baseUrl = useContext(UrlContext);

  useEffect(() => {
    axios.get(`${baseUrl}/posts`, {
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