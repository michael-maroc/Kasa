import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './components/ErrorPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Accommodations from './components/Accommodations.jsx';
import About from './components/About.jsx';
import './sass/main.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);