import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Policy from './Components/Policy';
import Error from './Components/Error';
import List from './Components/List';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    
    <Router>
    <List />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path='/about' element={<About/>} />
         <Route exact path='/services' element={<Services/>} />
         <Route exact path='/contact' element={<Contact />} />
         <Route exact path='/policy' element={<Policy />} />
         <Route path='*' element={<Error/>} />

      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
