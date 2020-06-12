import React, { useState } from 'react';
import { UrlContext } from './contexts/UrlContext';
import { RefreshContext } from './contexts/RefreshContext';
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

const App = () => {

  const [refresh, setRefresh] = useState(false);

  const refreshValue = { refresh, setRefresh };

  return (
    <UrlContext.Provider value={'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'} >
      <RefreshContext.Provider value={refreshValue} >
        <MuiThemeProvider theme={MyTheme}>
          <Router />
        </MuiThemeProvider>
      </RefreshContext.Provider>
    </UrlContext.Provider>
  );
}

export default App;
