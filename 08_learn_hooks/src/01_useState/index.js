import React, { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0)
  return <div>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount((preValue) => preValue - 1)}>-1</button>
  </div>;
}
