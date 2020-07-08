import React from 'react';
import GlobalFonts from './fonts/fonts';
import Products from './components/ProductsPage/Products';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import about from './components/AboutUs/about';
import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Container from '../src/components/container';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <GlobalFonts />
        <Container />
      </div>
    </Router>
    
  )
}
export default App;

