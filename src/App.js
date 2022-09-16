import React from 'react';
import './App.css';

import Header from '../src/components/Header/Header';
import Main from '../src/components/Main/Main';
import Footer from '../src/components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
