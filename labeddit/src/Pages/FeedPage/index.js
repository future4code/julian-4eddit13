import React, { useState, useEffect, useContext } from 'react';
import {
  FeedPageContainer,
  FeedPageWrapper
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CreatePost from '../../components/CreatePost';
import Loading from '../../components/Loading';
import { usePrivatePage } from '../../hooks/hooks';
import {
  UrlContext,
  RefreshContext,
  SearchContext
} from '../../contexts/contexts';
import axios from 'axios';

const FeedPage = () => {

  usePrivatePage();

  const [postsList, setPostsList] = useState(undefined);

  const baseUrl = useContext(UrlContext);

  const { refresh } = useContext(RefreshContext);

  const { search } = useContext(SearchContext);

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

  const searchPosts = () => {
    let newList = postsList;
    if (search) {
      newList = newList.filter(post => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase()) || 
          post.text.toLowerCase().includes(search.toLowerCase()) ||
          post.username.toLowerCase().includes(search.toLowerCase())
        )
      })
    }
    return newList;
  }

  return (
    <FeedPageContainer>
      <Header />
      {postsList ? (
        <FeedPageWrapper>
          <CreatePost />
          {searchPosts().map(post => (<PostCard key={post.id} post={post} />))}
        </FeedPageWrapper>
      ) : 
        <Loading />
      }
      <Footer />
    </FeedPageContainer>
  )
}

export default FeedPage;