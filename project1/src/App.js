import logo from './logo.svg';
import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Alert from './Component/Alert';
import About from './Component/About';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Form from './Component/Form';
import Main from './Component/Main';


function App() {
  return (
    <div className="App2">
      <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/product" element={<Product />} />
            <Route path="/price" element={<Price />} />
          </Route>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={
            <Check isLoggedIn={true}>
              <About />
            </Check>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/main" element={<Main />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
      
    </div>
  );
}


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

function Check ({ children, isLoggedIn}) {
  // console.log(">>>>?????????", isLoggedIn, children)
  return isLoggedIn ? children : <Navigate to="/login" />;
  
  // if(isLoggedIn){
  //   return children
    
  // }
  // else{
  //   return <Navigate to="/login" /> 
  //     }
  //   }
}


export default App;
