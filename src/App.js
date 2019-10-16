import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import OrderForm from './components/OrderForm';
import Checkout from './components/Checkout';
import CombinationContextProvider from './contexts/CombinationContext';
import NavContextProvider from './contexts/NavContext';
import History from './components/History';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavContextProvider>
        <CombinationContextProvider>
          <Navbar />
          <Route exact path="/" component={OrderForm} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" component={History} />
        </CombinationContextProvider>
        </NavContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;