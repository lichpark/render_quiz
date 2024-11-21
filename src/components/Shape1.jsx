import { useState } from "react";

const Shape1 = () => {
  const [size, setSize] = useState("100px");
  const [bgc, setBgc] = useState("green");
  const chgSize = () =>
    setSize((prev) => (prev == "100px" ? "200px" : "100px"));
  const chgBgc = () =>
    setBgc((prev) =>
      prev == "green" ? "yellow" : prev == "yellow" ? "red" : "green"
    );
  const colorMap = {
    green: "노랑",
    yellow: "빨강",
    red: "초록",
  };
  return (
    <div>
      <div
        style={{
          width: `${size}`,
          height: `${size}`,
          border: "1px solid black",
          backgroundColor: `${bgc}`,
        }}
      ></div>
      <button onClick={chgSize}>{size == "100px" ? "크게" : "작게"}</button>
      <button onClick={chgBgc}>{colorMap[bgc]}</button>
    </div>
  );
};

export default Shape1;
