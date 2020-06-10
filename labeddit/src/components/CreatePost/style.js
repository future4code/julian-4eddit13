import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button,

} from '@material-ui/core';

export const CreatePostContainer = styled.form`
 width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CreatePostWrapper = styled.form`

`

export const CreatePostFormControl = styled(FormControl)`
  width: 100%;
`
export const CreatePostTittle = styled(TextField)`
 
`
export const CreatePostTextfield = styled(TextField)`
  height: 60px;
`

export const CreatePostButton = styled(Button)`
  width: 100px;
`