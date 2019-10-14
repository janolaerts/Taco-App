import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import VegetarianContextProvider from './contexts/VegetarianContext';
import OrderForm from './components/OrderForm';
import Checkout from './components/Checkout';
import CombinationContextProvider from './contexts/CombinationContext';
import NavContextProvider from './contexts/NavContext';
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavContextProvider>
        <CombinationContextProvider>
        <VegetarianContextProvider>
          <Navbar />
          <Route exact path="/" component={OrderForm} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/favorites" component={Favorites} />
        </VegetarianContextProvider>
        </CombinationContextProvider>
        </NavContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;