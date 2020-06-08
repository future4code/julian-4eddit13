import React from 'react';
import logo from '../../img/labeddit.png';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer, 
  ImageLogo
} from './style';

const Header = () => {

  const history = useHistory();

  const goToHomePage = () => {
    history.push('/');
  }

  return (
    <HeaderContainer>
      <ImageLogo src={logo} alt='logo' onClick={goToHomePage} />
    </HeaderContainer>
  )
}

export default Header