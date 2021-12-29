import "./App.css";
import Netflix from "./Netflix";
import "./index.css";
import Basic from "./Basic";
import Top5 from "./Top5";
import Clickcount from "./Clickcount";
import HoverCount from "./HoverCount";
import Count from "./Count";
import data from "./Data";

function App() {
  return (
    <>
      <Count>
        {(count, increament) => (
          <Clickcount count={count} increament={increament} />
        )}
      </Count>
      <Count>
        {(count, increament) => (
          <HoverCount count={count} increament={increament} />
        )}
      </Count>

      {/* <Clickcount />
    <HoverCount /> */}

      {/* <Basic name={(isLogin) => isLogin ? "Hey How r You ?" :"Please Sign In"}/> */}
      {/* <Netflix /> */}
      {/* <h1 style={{textAlign: "center", color: "gray", marginTop: "20px"}}>My Favourite Top 5 Disney Movies</h1>
      <Top5 image={data[0].image} title={data[0].title} year={data[0].year} link={data[0].link}/>
      <Top5 image={data[1].image} title={data[1].title} year={data[1].year} link={data[1].link} /> */}
    </>
  );
}

export default App;
