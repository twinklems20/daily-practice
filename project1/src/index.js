import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

ReactDOM.render(
  <>
    {/* <App /> */}
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/product" element={<Product />} />
            <Route path="/price" element={<Price />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
  </>,
  document.getElementById('root')
);

function Product() {
  return (
    <h2>Product List</h2>
  )
}

function Price() {
  return (
    <h2>Price</h2>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
