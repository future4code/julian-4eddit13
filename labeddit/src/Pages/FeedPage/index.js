import React from 'react';
import {
  FeedPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';

const FeedPage = (props) => {

  return (
    <FeedPageContainer>
      <Header />
      FeedPage
      <Footer />
    </FeedPageContainer>
  )
}

export default FeedPage;