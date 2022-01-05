import './App.css';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';
import './index.css'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Demo />
      {/* <Demo2 /> */}
    </div>
  );
}

export default App;
