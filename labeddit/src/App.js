import React, { useState } from 'react';
import Router from './Router';
import { 
  UrlContext,
  RefreshContext,
  SearchContext
} from './contexts/contexts'
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

  const [search, setSearch] = useState('');

  const refreshValue = { refresh, setRefresh };

  const searchValue = { search, setSearch };

  return (
    <UrlContext.Provider value={'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'} >
      <RefreshContext.Provider value={refreshValue} >
        <SearchContext.Provider value={searchValue} >
          <MuiThemeProvider theme={MyTheme}>
            <Router />
          </MuiThemeProvider>
        </SearchContext.Provider>
      </RefreshContext.Provider>
    </UrlContext.Provider>
  );
}

export default App;
