import './App.css';
import React from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Nav from './Utils/NavBar';
import Header from './Utils/Header';
import Footer from './Utils/Footer';
import {Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
        <Route exact path="/" element={<About />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/resume" element={<Resume />}/>
          <Route exact path="/portfolio" element={<Portfolio />}/>
          <Route exact path="/contacts" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
