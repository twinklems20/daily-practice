import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Twinkle from './Twinkle';
import reportWebVitals from './reportWebVitals';

// const name = 'Krina';
// const element = <h1>Hello, {name}</h1>;

// function name(person) {
//   return person.fname + " " + person.lname
// };

// const person = {
//   fname : "Twinkle",
//   lname : "MS"
// };

// const element = (
//   <h1>
//     Heyy, {name(person)}...
//   </h1>
// );

// Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// function clock() {
//   const element = (
//     <div>
//       <h2>Time is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// }
// setInterval(clock, 1000)  // THIS CALL ReactDOM.render() EVERY SECOND from setInterval() CALLBACK

// function Complement(props) {
//   return <h2>Hey Pretty {props.name}</h2>
// }

// class Complement extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <Complement name = "Twinkle" />

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App2() {
//   return (   `
//     <div>
//       <Welcome name="Roshni" />
//       <Welcome name="Ishita" />
//       <Welcome name="Krina" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App2 />,
//   document.getElementById('root')
// );



// function Watch(props) {
//   return (
//     <div>
//       <h2>Hey Gorgeous It's {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }


// class Watch extends React.Component {
//   render (props) {
//     return (
//       <div>
//         <h2>Hey Gorgeous It's {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// function time() {
//   ReactDOM.render (
//     <Watch date = {new Date()}/>,
//     document.getElementById('root')
//   )
// }

// class Watch extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {date : new Date()};
//   }

//   render (props) {
//     return (
//       <div>
//         <h2>Hey Gorgeous time is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// function time() {
//   ReactDOM.render (
//     <Watch />,
//     document.getElementById('root')
//   )
// }

// setInterval(time, 1000)



  class Watch extends React.Component {
    constructor (props) {
      super (props);
      this.state = {date : new Date()};
    }

  componentDidMount () {
    this.timeID = setInterval (
      () => this.time (),
        1000
    )
  }

  componentWillUnmount () {
    clearInterval (this.timeID)
  }

  time () {
    this.setState ({
      date : new Date()
    });
  }

    render (props) {
      return (
        <div>
          <h2>Hey Roshni time is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

  

  
  


  function Fridge(props) {
    const leftItems = props.leftItems ;
    return (
        <div>
          <h1>Hey Eda</h1>
          {
            leftItems.length > 0 && 
            <h2>You have {leftItems.length} items left in your fridge</h2>
          }
        </div>
    )
  }
  
   const items = ["Chocolate", "Pastry", "Ice-creame", "Pastry", "Ice-creame"]

  ReactDOM.render (
    // <Watch />,
    // <Form />,
    // <Gmorning isMorning = {false} />,
    // <Fridge leftItems = {items} />,
    document.getElementById('root')
  )

  

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     element;
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();