import React from 'react';
import logo from '../../img/labeddit2.png';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer, 
  HeaderWrapper,
  HeaderMenuWrapper,
  ImageLogo,
  HeaderButton
} from './style';

const Header = () => {

  const history = useHistory();

  const token = window.localStorage.getItem('token');

  const username = window.localStorage.getItem('username');

  const goToFeedPage = () => {
    history.push('/home');
  }

  const logOut = () => {
    window.localStorage.clear();
    history.push('/');
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <ImageLogo src={logo} alt='logo' onClick={goToFeedPage} />
        <HeaderMenuWrapper>
          {token && (
            <div>
              <p>Olá {username}</p>
              <HeaderButton onClick={logOut} >Logout</HeaderButton>
            </div>
          )}
        </HeaderMenuWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header