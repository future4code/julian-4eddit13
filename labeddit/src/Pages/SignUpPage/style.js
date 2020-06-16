import styled from 'styled-components';
import {
  TextField,
  FormControl,
  Button
} from '@material-ui/core';

export const SignUpPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SignUpFormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const SignUpTextField = styled(TextField)`
`
export const SignUpFormControl = styled(FormControl)`
  width: 250px;
  && {
    margin: .5em;
  }
`
export const SignUpButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 250px;
  padding: 4px;
`
export const SignUpButton = styled(Button)``