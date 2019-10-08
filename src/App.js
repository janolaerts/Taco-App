import React from 'react';
import Navbar from './components/Navbar';
import LanguageContextProvider from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navbar />
      </LanguageContextProvider>
    </div>
  );
}

export default App;