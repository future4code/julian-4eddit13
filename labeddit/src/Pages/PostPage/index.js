import React from 'react';
import {
  PostPageContainer
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CommentCard from '../../components/CommentCard';

const PostPage = (props) => {

  return (
    <PostPageContainer>
      <Header />
      PostPage
      <Footer />
    </PostPageContainer>
  )
}

export default PostPage;