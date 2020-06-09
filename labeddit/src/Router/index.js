import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import FeedPage from '../Pages/FeedPage';
import PostPage from '../Pages/PostPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        <Route exact path='/home'>
          <FeedPage />
        </Route>
        <Route exact path='/:postId'>
          <PostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router