import React from 'react';
import GlobalFonts from './fonts/fonts';
import { BrowserRouter as Router } from 'react-router-dom';
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

