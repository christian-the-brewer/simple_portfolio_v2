import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import IndexProjects from './components/projects/IndexProjects';
import ShowProject from './components/projects/ShowProject';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<IndexProjects />} />
        <Route path='/project/:id' element={<ShowProject />} />
        <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
