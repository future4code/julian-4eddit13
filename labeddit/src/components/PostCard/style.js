import styled from 'styled-components';
import {
  Card,
  IconButton,
  Button
} from '@material-ui/core';
import {
  ThumbUp,
  ThumbDown
} from '@material-ui/icons';

export const PostCardContainer = styled(Card)`
  width: 500px;
  margin: 1em;
  padding: 1em;
`
export const PostCardTitle = styled.h3`
  cursor: pointer;
`
export const PostCardInteractionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const PostCardVoteWrapper = styled.div`
`
export const PostCardCommentWrapper = styled.div`
`
export const PostCardIconButton = styled(IconButton)`
`
export const PostCardButton = styled(Button)`
`
export const ThumbUpIcon = styled(ThumbUp)`
`
export const ThumbDownIcon = styled(ThumbDown)`
`