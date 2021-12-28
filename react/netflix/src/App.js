import './App.css';
import Netflix from './Netflix';
import "./index.css";
import Basic from './Basic';
import Top5  from './Top5';
import Clickcount from './Clickcount';
import HoverCount from './HoverCount';
import Count from './Count';

function App() {
  return (
    <>
    <Count render={(count, increament) => (<Clickcount count={count} increament={increament}/>) } />
    <Count render={(count, increament) => (<HoverCount count={count} increament={increament}/>) } />
    {/* <Clickcount />
    <HoverCount /> */}
      {/* <Basic name={(isLogin) => isLogin ? "Hey How r You ?" :"Please Sign In"}/> */}
      {/* <Netflix /> */}
      {/* <h1 style={{textAlign: "center", color: "gray", marginTop: "20px"}}>My Favourite Disney Movies</h1> */}
      {/* <Top5 link="https://www.hotstar.com/in/movies/the-reluctant-dragon/1260044187"/> */}
      {/* <Top5 link="https://www.hotstar.com/in/movies/frozen-ii/1260022015"/> */}
    </>
  );
}

export default App;
