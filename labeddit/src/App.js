import React from 'react';
import { UrlContext } from './contexts/UrlContext';
import Router from './Router';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#71EB1E",
    },
    secondary: {
      main: "#ff9800",
    },
  },
});

function App() {
  return (
    <UrlContext.Provider value={'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'}>
      <MuiThemeProvider theme={MyTheme}>
        <Router />
      </MuiThemeProvider>
    </UrlContext.Provider>
  );
}

export default App;
