import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import usePersistentState from './utils/usePersistentState';

import store from './redux/store';
// import theme from './theme/theme';
import dark from './theme/dark';
import light from './theme/light'
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = usePersistentState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
