import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const CreateCommentContainer = styled.form`
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const CreateCommentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 560px) {
    width: 500px;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
`
export const CreateCommentFormControl = styled(FormControl)`
  width: 100%;
  && {
    margin: .5em;
  }
`
export const CreateCommentTextfield = styled(TextField)`
`
export const CreateCommentButton = styled(Button)`
  align-self: flex-end;
`