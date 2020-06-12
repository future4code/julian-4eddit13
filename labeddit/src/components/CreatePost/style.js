import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const CreatePostContainer = styled.form`
`
export const CreatePostWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CreatePostFormControl = styled(FormControl)`
  width: 100%;
  && {
    margin: .5em;
  }
`
export const CreatePostTittle = styled(TextField)`
`
export const CreatePostTextfield = styled(TextField)`
  height: 60px;
`
export const CreatePostButton = styled(Button)`
  width: 150px;
`