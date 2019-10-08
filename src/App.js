import React from 'react';
import Navbar from './components/Navbar';
import LanguageContextProvider from './contexts/LanguageContext';
import RecipeForm from './components/RecipeForm';
import TacoList from './components/TacoList';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Navbar />
        <TacoList />
      </LanguageContextProvider>
    </div>
  );
}

export default App;