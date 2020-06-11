import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  PostPageContainer,
  PostPageWrapper
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

  const [refresh, setRefresh] = useState(false) // Variável que altera que chama a requisição do useEffect quando o botão de like e deslike é clicado.

  const refreshArray = [refresh, setRefresh];

  const pathParams = useParams();

  const history = useHistory();

  const baseUrl = useContext(UrlContext);

  const { comments } = postDetail;

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
  }, [baseUrl, setPostDetail, refresh])

  return (
    <PostPageContainer>
      <Header />
      <PostPageWrapper>
        <PostCard post={postDetail} refreshArray={refreshArray} />
        <CreateComment postId={pathParams.postId} />
        {(comments || []).map(comment => (
          <CommentCard key={comment.id} comment={comment} postId={pathParams.postId} refreshArray={refreshArray} />
        ))}
      </PostPageWrapper>
      <Footer />
    </PostPageContainer>
  )
}

export default PostPage;