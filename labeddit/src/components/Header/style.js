import styled from 'styled-components';
import {
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core';
import {
  Search,
  Clear
} from '@material-ui/icons';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  background-color: #ff9800 ;
  @media screen and (min-width: 560px){
    height: 100px;
  }
`
export const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  @media screen and (min-width: 560px) {
    grid-template-columns: 200px 1fr 200px;
  }
  @media screen and (max-width: 560px) {
    padding: 2em 0 1em 0;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr 1fr
  }
`
export const HeaderMenuWrapper = styled.div`
  @media screen and (max-width: 560px) {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
  }
  div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 560px) {
      flex-direction: row;
    }
    @media screen and (max-width: 560px) {
      flex-direction: column;
      justify-content: flex-end;
      p {
        margin: 0;
      }
    }
  }
`
export const ImageLogo = styled.img`
  cursor: pointer;
  width: 100%;
`
export const HeaderFormControl = styled(FormControl)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 560px) {
      width: 100%;
    }
    @media screen and (max-width: 560px) {
      width: 100%;
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
    }
  }
`
export const HeaderTextField = styled(TextField)`
  @media screen and (min-width: 560px) {
    width: 90%;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const HeaderInputAdornment = styled(InputAdornment)`
`
export const SearchIcon = styled(Search)`
`
export const HeaderIconButton = styled(IconButton)`
`
export const ClearIcon = styled(Clear)`
`
export const HeaderButton = styled(Button)`
`