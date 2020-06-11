import styled from 'styled-components';
import {
  TextField,
  FormControl,
  Button
} from '@material-ui/core';

export const LoginPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const LoginTextField = styled(TextField)`
`
export const LoginFormControl = styled(FormControl)`
  width: 250px;
`
export const LoginButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 250px;
  padding: 4px;
`
export const LoginButton = styled(Button)`
 
`
