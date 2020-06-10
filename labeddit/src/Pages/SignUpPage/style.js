import styled from 'styled-components';
import {
  TextField,
  FormControl,
  Button
} from '@material-ui/core';

export const SignUpPageContainer = styled.div`
`
export const SignUpFormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const SignUpTextField = styled(TextField)`
`
export const SignUpFormControl = styled(FormControl)`
  width: 250px;
`
export const SignUpButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 250px;
  padding: 4px;
`
export const SignUpButton = styled(Button)``