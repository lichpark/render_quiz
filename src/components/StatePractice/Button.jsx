import { useState } from "react";

const Button = (props) => {
  const [bg, setBg] = useState("pink");

  const change = () => {
    setBg((prev) => {
      prev == "pink" ? "blue" : "pink";
    });
  };
  return (
    <button
      onClick={change}
      style={{
        border: "none",
        padding: "5px 10px",
        backgroundColor: bg,
        padding: props.padding,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
