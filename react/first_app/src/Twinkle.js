import React from "react";
import ReactDOM, { render } from "react-dom";

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.handleMorningClick = this.handleMorningClick.bind(this);
    this.handleNightClick = this.handleNightClick.bind(this);
    this.state = { isMorning: false };
  }

  handleMorningClick() {
    this.setState({ isMorning: false });
  }

  handleNightClick() {
    this.setState({ isMorning: true });
  }

  render() {
    const isMorning = this.state.isMorning;
    let button;

    // if (isMorning) {
    //   button = <MButton onClick={this.handleMorningClick} />;
    // } else {
    //   button = <NButton onClick={this.handleNightClick} />;
    // }

    <div>
      {isMorning
        ? (button = <MButton onClick={this.handleMorningClick} />)
        : (button = <NButton onClick={this.handleNightClick} />)}
    </div>;

    return (
      <div>
        <Gmorning isMorning={isMorning} />
        {button}
      </div>
    );
  }
}

function Morning(props) {
  return <h1>Good Morning </h1>;
}

function Sleep(props) {
  return <h1>It's not morning go to the bed !!</h1>;
}

function Gmorning(props) {
  const isMorning = props.isMorning;

  // if (isMorning) {
  //   return <Morning />
  // }
  // else {
  //   return <Sleep />
  // }

  return (
    <div>
      {isMorning ? Morning() : Sleep()}
      {/* {isMorning ? null : Sleep()} */}
    </div>
  );
}

function MButton(props) {
  return <button onClick={props.onClick}>MORNING</button>;
}

function NButton(props) {
  return <button onClick={props.onClick}>NIGHT</button>;
}


function Intro(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{fDate(props.date)}</h2>
      <h1>{props.author.name}</h1>
    </div>
  );
}


function fDate(date) {
  return date.toLocaleDateString();
}


const intro = {
  date: new Date(),
  text: "Hey ! You r beautiful inside and out",
  author: {
    name: "Kuhu",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function Fridge(props) {
  const leftItems = props.leftItems;
  return (
    <div>
      <h1>Hey Eda</h1>
      {leftItems.length > 0 && (
        <h2>You have {leftItems.length} items left in your fridge</h2>
      )}
    </div>
  );
}

const items = ["Chocolate", "Pastry", "Ice-creame", "Pastry", "Ice-creame"];

ReactDOM.render(
  // <Gmorning isMorning = {false} />,
  // <Fridge leftItems = {items} />,
  // <Greet />,
  <Intro date={intro.date} text={intro.text} author={intro.author} />,
  document.getElementById("root")
);