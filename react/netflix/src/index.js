import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


// function morning(props) {
//   return <h1>Good Morning</h1>
// }

// function after(props) {
//   return <h1>Good Morning</h1>
// }

// function night(props) {
//   return <h1>Good Morning</h1>
// }

// function Greet(props) {
//   return <h1>Good Morning</h1>
// }

// const name1 = "Krina";
const d = new Date();

// ReactDOM.render(
//   <>
    {/* Challenge 1 */}

    {/* <h1>Netflix Picker</h1>
    <p>Top 5 Netflix Movies</p>
    <ol>
      <li>Don't Look Up</li>
      <li>The Witcher</li>
      <li>Emily in Paris</li>
      <li>The Christmas Chronicles</li>
      <li>The Unforgivable</li>
    </ol> */}

    {/* Challenge 2 */}

    {/* <h1>{name1}</h1>
    <p>
      Today date is <b>{`${d.toLocaleDateString()}`}</b>
    </p>
    <p>
      Current Time is <b>{`${d.toLocaleTimeString()}`}</b>
    </p> */}


    

    
      
//   </>,
//   document.getElementById("root")
// );

// const name = "Kuhu";
// const s = "Roy";
// const img1 = "https://picsum.photos/300";
// const img2 = "https://picsum.photos/id/1/300/300";
// const img3 = "https://picsum.photos/300/300";

// const heading = {
//   color: "purple",
//   textAlign: "center",
//   margin: "45px 0",
//   fontFamily: "'Pushster', cursive",
//   fontSize: "45px",
// };

// ReactDOM.render(
//   <>
//     {/* <h1 style={{ color: 'purple' , textAlign: 'center' }}>Hey  </h1> */}
//     <h1 style={heading} contentEditable="true">
//       This is {`${name} ${s}`}'s Gallery
//     </h1>
//     <div className="imgGallery">
//       <img src={img1} alt="alt text" />
//       <img src={img2} alt="alt text" />
//       <img src={img3} alt="alt text" />
//     </div>

//     <h1 date={d}>Hey Good {morning()}</h1>
//     {/* <h1>This is {Math.random()}</h1> */}
//   </>,
//   document.getElementById("root")
// );

let d1 = new Date();
d1 = d1.getHours();

let greet = ' ';
let grt = ' ';

if (d1 >= 1 && d1 < 12) {
  greet = "Good morning";
  grt = {
    color : 'blue'
  }
}

else if (d1 >= 12 && d1 < 19) {
  greet = "Good Afternoon";
  grt = {
    color : 'purple'
  }
}

else {
  greet = "Good Night";
  grt = {
    color : 'orange'
  }
}

ReactDOM.render (
  <>
    <h1>Hey !! <span style={grt}>{greet}</span></h1>,
    {/* <Greet /> */}
  </>,
  document.getElementById('root')
)

reportWebVitals();
