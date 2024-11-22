import { useState } from "react";

const Check = (props) => {
  return (
    <div>
      <button onClick={props.change} style={{ border: "none" }}>
        {props.ischeck ? "V" : "X"}
      </button>
      <span style={{ color: "grey" }}>내용</span>
    </div>
  );
};

export default Check;
