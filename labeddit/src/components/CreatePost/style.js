import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const CreatePostContainer = styled.form`
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const CreatePostWrapper = styled.div`
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