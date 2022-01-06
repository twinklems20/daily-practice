import React, { useRef } from "react";

function Demo4() {
  const bgRef = useRef();

  const onToggle = () => {
    bgRef.current.style.backgroundColor = "#C87792"
      console.log("works")
  }

  return (
    <div>
      <div className="container" ref={bgRef}>
        <input type="text" /> <br/>
        <button onClick={() => {onToggle()}}>Toggle</button>
      </div>
    </div>
  );
}

export default Demo4;
