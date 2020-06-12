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

export const CommentCardContainer = styled(Card)`
  margin: 1em;
  padding: 1em;
  width: 500px;
`
export const CommentCardTitle = styled.h3`
  cursor: pointer;
`
export const CommentCardInteractionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const CommentCardVoteWrapper = styled.div`
`
export const CommentCardIconButton = styled(IconButton)`
`
export const CommentCardButton = styled(Button)`
`
export const ThumbUpIcon = styled(ThumbUp)`
`
export const ThumbDownIcon = styled(ThumbDown)`
`