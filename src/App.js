import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import './global.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
