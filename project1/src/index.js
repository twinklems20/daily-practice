import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Login from './Component/Login';

ReactDOM.render(
  <>
    <App />
    
  </>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
