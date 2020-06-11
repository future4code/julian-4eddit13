import React, { useState, useEffect, useContext } from 'react';
import {
  FeedPageContainer,
  FeedPageWrapper
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CreatePost from '../../components/CreatePost';
import { usePrivatePage } from '../../hooks/usePrivatePage';
import { UrlContext } from '../../contexts/UrlContext';
import axios from 'axios';

const FeedPage = (props) => {

  usePrivatePage();

  const [postsList, setPostsList] = useState([]);

  const baseUrl = useContext(UrlContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get(`${baseUrl}/posts`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setPostsList(response.data.posts);
    })
    .catch(error => {
      console.log(error);
    })
  }, [setPostsList, baseUrl])

  return (
    <FeedPageContainer>
      <Header />
      <FeedPageWrapper>
        <CreatePost />
        {postsList.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
      </FeedPageWrapper>
      <Footer />
    </FeedPageContainer>
  )
}

export default FeedPage;