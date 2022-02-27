import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartContext } from './cart-context';
import Navigation from './components/Navigation/Navigation';

import Cart from './features/Cart/Cart';
import { AppRoutes } from './Routes'

import GlobalStyles from './styles/global';
import { lightTheme } from './styles/theme';


const App = () => {
  const { isOpen } = useContext(CartContext);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Navigation />
        {isOpen ? <Cart /> : null}
        <AppRoutes />
      </BrowserRouter>
      
    </ThemeProvider>
  );
};

export default App;
