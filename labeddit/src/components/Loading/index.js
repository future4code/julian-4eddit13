import React from 'react';
import {
  LoadingContainer,
  LoadingReactLoading
} from './style';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingReactLoading type={"bars"} color={"#ff9800"} />
    </LoadingContainer>
  )
}

export default Loading;