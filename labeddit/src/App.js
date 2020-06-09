import React from 'react';
import { UrlContext } from './contexts/UrlContext';
import Router from './Router';

function App() {
  return (
    <UrlContext.Provider value={'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'}>
      <Router />
    </UrlContext.Provider>
  );
}

export default App;
