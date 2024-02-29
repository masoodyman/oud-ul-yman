import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NoPage from './NoPage';
import Navbar from './Navbar';
import Footer from './Footer';
import AllOud from './AllOud';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About />} />
      <Route path="/service" element={ <Service />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/alloud" element={ <AllOud />} />
      <Route path="*" element={ <NoPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
