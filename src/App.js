import React from 'react';
import './App.css';
// Page
import Home from './containers/Home';
import NavigationBar from './containers/NavigationBar';
import { Router } from "@reach/router";
import Contact from './containers/Contact';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
    <Router>
      <Home exact path='/'/>
      <Contact path='contact'/>
      <ProductList path='products'/>
    </Router>
    </div>
  );
}

export default App;
