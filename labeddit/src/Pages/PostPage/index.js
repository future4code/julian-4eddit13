import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  PostPageContainer,
  PostPageWrapper
} from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostCard from '../../components/PostCard';
import CommentCard from '../../components/CommentCard';
import CreateComment from '../../components/CreateComment';
import { usePrivatePage } from '../../hooks/hooks';
import {
  UrlContext,
  RefreshContext
} from '../../contexts/contexts';
import axios from 'axios';

const PostPage = () => {

  usePrivatePage();

  const [postDetail, setPostDetail] = useState({});

  const pathParams = useParams();

  const baseUrl = useContext(UrlContext);

  const { refresh } = useContext(RefreshContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get(`${baseUrl}/posts/${pathParams.postId}`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      setPostDetail({ ...response.data.post, comments: sortList(response.data.post.comments) });
    })
    .catch(error => {
      console.log(error);
    })
  }, [baseUrl, setPostDetail, pathParams.postId, refresh]);

  const sortList = (list) => {
    let newList = list;
    newList = [].concat(list).sort((a, b) => {
      return a.createdAt > b.createdAt ? -1 : (a.createdAt < b.createdAt ? 1 : 0);
    });
    return newList;
  }

  return (
    <PostPageContainer>
      <Header />
      <PostPageWrapper>
        <PostCard post={postDetail} />
        <CreateComment postId={pathParams.postId} />
        {(postDetail.comments || []).map(comment => (
          <CommentCard key={comment.id} comment={comment} postId={pathParams.postId} />
        ))}
      </PostPageWrapper>
      <Footer />
    </PostPageContainer>
  )
}

export default PostPage;