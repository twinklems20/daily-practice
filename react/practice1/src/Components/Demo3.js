import React, { useState, useMemo } from "react";

function Demo3() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

//   const double = doubleOf(number);

  const double = useMemo(() => doubleOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div>
      double of
      <input type="number" value={number} onChange={onChange} />
      is {double}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Re-render
      </button>
    </div>
  );
}
function doubleOf(n) {
  console.log("doubleOf(n) called!");
  return n <= 0 ? 0 : n * 2;
}

export default Demo3;
