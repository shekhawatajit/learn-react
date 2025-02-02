import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='Home' element={<Home />} />
          <Route index path='AboutUs' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
