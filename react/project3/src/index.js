import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Clock extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       date : new Date()
    }
  }

  componentDidMount () {
    this.timer = setInterval(
      () => this.tick() ,
       1000);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState ({
      date : new Date ()
    })
  }

  render () {
    return (
      <div>
        <h1>Hey time is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
  
}



ReactDOM.render (
  <Clock />,
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
