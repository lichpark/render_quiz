import { useState } from "react";

const Count = (props) => {
  return (
    <>
      <button onClick={props.minus}>-</button>
      <span>{props.total}</span>
      <button onClick={props.plus}>+</button>
    </>
  );
};

export default Count;
