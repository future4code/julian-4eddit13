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
import { RefreshContext } from '../../contexts/RefreshContext';
import axios from 'axios';

const FeedPage = () => {

  usePrivatePage();

  const [postsList, setPostsList] = useState([]);

  const baseUrl = useContext(UrlContext);

  const { refresh } = useContext(RefreshContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get(`${baseUrl}/posts`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setPostsList(sortList(response.data.posts));
    })
    .catch(error => {
      console.log(error);
    })
  }, [setPostsList, baseUrl, refresh]);

  const sortList = (list) => {
    let newList = list;
    newList = [].concat(list).sort((a, b) => {
      return a.createdAt > b.createdAt ? -1 : (a.createdAt < b.createdAt ? 1 : 0);
    });
    return newList;
  }

  return (
    <FeedPageContainer>
      <Header />
      <FeedPageWrapper>
        <CreatePost />
        {postsList.map(post => (<PostCard key={post.id} post={post} />))}
      </FeedPageWrapper>
      <Footer />
    </FeedPageContainer>
  )
}

export default FeedPage;