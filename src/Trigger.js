import React from 'react';
import './style.css';

export default function Trigger(props) {
  return (
    <>
      <button onClick={props.clickMe}>Click Me</button>
    </>
  );
}
