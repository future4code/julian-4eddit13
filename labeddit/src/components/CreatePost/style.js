import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const CreatePostContainer = styled.form`
`
export const CreatePostWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CreatePostFormControl = styled(FormControl)`
  width: 100%;
`
export const CreatePostTextfield = styled(TextField)`
`
export const CreatePostButton = styled(Button)`
  align-self: flex-end;
`