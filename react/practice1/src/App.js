import './App.css';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';
import Demo3 from './Components/Demo3';
import Demo4 from './Components/Demo4';
import Demo5 from './Components/Demo5';
import Demo6 from './Components/Demo6';
import Demo7 from './Components/Demo7';
import React, {createContext} from 'react'
import './index.css'
import Demo8 from './Components/Demo8';
import Demo9 from './Components/Demo9';

export const Person = createContext('Kiraz')
export const Year = createContext('3000')

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      {/* <Demo2 /> */}
      {/* <Demo3 /> */}
      {/* <Demo4 /> */}
      {/* <Demo5 /> */}
      <Person.Provider value = {'Krina'}>

        {/* <Year.Provider value = {2000}>
          <Demo8 />
        </Year.Provider> */}
        <Demo9 />

      </Person.Provider>
      
    </div>
  );
}

export default App;
