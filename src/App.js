import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import LanguageContextProvider from './contexts/LanguageContext';
import TacoList from './components/TacoList';
import Checkout from './components/Checkout';
import CombinationContextProvider from './contexts/CombinationContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CombinationContextProvider>
        <LanguageContextProvider>
          <Navbar />
          <Route exact path="/" component={TacoList} />
          <Route path="/checkout" component={Checkout} />
        </LanguageContextProvider>
        </CombinationContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;