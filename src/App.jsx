import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
