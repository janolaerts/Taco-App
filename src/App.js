import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import LanguageContextProvider from './contexts/LanguageContext';
import OrderForm from './components/OrderForm';
import Checkout from './components/Checkout';
import CombinationContextProvider from './contexts/CombinationContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CombinationContextProvider>
        <LanguageContextProvider>
          <Navbar />
          <Route exact path="/" component={OrderForm} />
          <Route path="/checkout" component={Checkout} />
        </LanguageContextProvider>
        </CombinationContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;