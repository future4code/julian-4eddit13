import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const CreateCommentContainer = styled.form`
`
export const CreateCommentWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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