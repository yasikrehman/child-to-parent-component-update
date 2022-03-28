import React, { useState } from 'react';
import './style.css';
import Trigger from './Trigger';

export default function App() {
  const [count, setCount] = useState(0);

  function IamClick() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <Trigger clickMe={IamClick} />
    </div>
  );
}
