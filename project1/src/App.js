import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Alert from './Component/Alert';
import About from './Component/About';


function App() {
  return (
    <div className="App2">
      <Navbar />
      {/* <About /> */}
      <Contact />
      
    </div>
  );
}

export default App;
