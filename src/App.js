import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Contact from './components/Contact';
import Research from './components/Research';
import People from './components/People';
import Data from './components/Data';
import Publications from './components/Publications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/research' element={<Research />} />
        <Route path='/people' element={<People />} />
        <Route path='/data' element={<Data />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </Router>
    {/* <Footer /> */}
    {/* <Cards /> */}
    </>
  );
}

export default App;
