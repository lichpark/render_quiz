import { useState } from "react";

const CheckButtonSmall = (props) => {
  return (
    <div>
      <button
        onClick={props.change}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "9999px",
          backgroundColor: `${props.checked == false ? "white" : "yellow"}`,
          border: `1px solid black`,
        }}
      >
        {props.checked == false ? "" : "✔️"}
      </button>
    </div>
  );
};

export default CheckButtonSmall;
