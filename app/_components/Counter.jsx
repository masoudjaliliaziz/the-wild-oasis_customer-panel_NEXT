"use client";
import React, { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex">
      <p>the current users are {users.length}</p>
      <button onClick={() => setCount((cur) => cur + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount((cur) => cur - 1)}>-</button>
    </div>
  );
}

export default Counter;
