import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  if (count < 0) {
    setCount(0);
  } else if (count > 10) {
    setCount(10);
  }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button type="button" className="btn btn-primary" onClick={increment}>
        Arttır
      </button>
      <button type="button" className="btn btn-danger" onClick={decrement}>
        Azalt
      </button>
    </div>
  );
}
