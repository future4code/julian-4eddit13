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
  > p:last-of-type {
    font-size: .75em;
  }
  @media screen and (min-width: 560px) {
    width: 500px;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
`
export const CommentCardTitle = styled.h3`
`
export const CommentCardInteractionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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