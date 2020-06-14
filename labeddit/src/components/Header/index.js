import React, { useContext } from 'react';
import logo from '../../img/labeddit2.png';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer, 
  HeaderWrapper,
  HeaderMenuWrapper,
  ImageLogo,
  HeaderFormControl,
  HeaderTextField,
  HeaderInputAdornment,
  SearchIcon,
  HeaderIconButton,
  ClearIcon,
  HeaderButton
} from './style';
import { SearchContext } from '../../contexts/contexts';

const Header = () => {

  const { search, setSearch } = useContext(SearchContext)

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
        {history.location.pathname === '/home' && (
          <HeaderFormControl>
            <HeaderTextField 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <HeaderInputAdornment position="start">
                    <SearchIcon />
                  </HeaderInputAdornment>
                ),
                endAdornment: (
                  <HeaderInputAdornment position="end">
                    <HeaderIconButton onClick={() => setSearch('')} >
                      {search && <ClearIcon />}
                    </HeaderIconButton>
                  </HeaderInputAdornment>
                )
              }}
            />
          </HeaderFormControl>
        )}
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