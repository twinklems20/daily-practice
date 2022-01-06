import React, { useRef, useEffect, useReducer } from "react";

const initialState = {
  isRunning: false,
  time: 0,
};

const reducer = (state, action) => {

  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tickle":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
  
};

function Demo3() {
  const timeRef = useRef(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    timeRef.current = setInterval(() => dispatch({ type: "tickle" }), 1000);
    return () => {
      clearInterval(timeRef.current);
      timeRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="btnStyle">
      <h1>{state.time}</h1>
      <button
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          dispatch({ type: "stop" });
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Demo3;
