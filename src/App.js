import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootswatch/dist/cerulean/bootstrap.css'
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
