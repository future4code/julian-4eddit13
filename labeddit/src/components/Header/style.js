import styled from 'styled-components';
import {
  Button
} from '@material-ui/core';

export const HeaderContainer = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  background-color: #ff9800 ;
`
export const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderMenuWrapper = styled.div`
  div {
    display: flex;
  }
`
export const ImageLogo = styled.img`
  cursor: pointer;
  width: 100px;
`
export const HeaderButton = styled(Button)`
`