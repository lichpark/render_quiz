import { useState } from "react";

const Shape = () => {
  //네모 모양 있음[초기:흰색,네모]
  //버튼:검은색 빨간색
  //버튼:둥글게 네모
  //   const [color, setColor] = useState("white");
  //   const [radius, setRadius] = useState("0");

  //   const chgColor = (val) => setColor((prev) => (prev = val));
  //   const chgRadius = (val) => setRadius((prev) => (prev = val));

  const [[color, radius], setArray] = useState(["white", "0"]);
  const chgStyle = (val) => setArray((prev) => (prev = val));

  const [bg, setBg] = useState("black");
  const [rd, setRd] = useState("0px");

  const changeColor = () =>
    setBg((prev) => (prev == "black" ? (prev = "red") : (prev = "black")));
  const changeRadius = () =>
    setRd((prev) => (prev == "0px" ? (prev = "9999px") : (prev = "0px")));

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: `1px solid black`,
          backgroundColor: `${color}`,
          borderRadius: `${radius}px`,
        }}
      ></div>
      {/* <button onClick={() => chgColor("black")}>black</button>
      <button onClick={() => chgColor("red")}>red</button>
      <button onClick={() => chgRadius("9999")}>round</button>
      <button onClick={() => chgRadius("0")}>square</button> */}
      <button onClick={() => chgStyle(["black", radius])}> black</button>
      <button onClick={() => chgStyle(["red", radius])}>red</button>
      <button onClick={() => chgStyle([color, "9999"])}>round</button>
      <button onClick={() => chgStyle([color, "0"])}>square</button>

      <div
        style={{
          width: "100px",
          height: "100px",
          border: `1px solid black`,
          backgroundColor: `${bg}`,
          borderRadius: `${rd}`,
        }}
      ></div>
      <button onClick={changeColor}>{bg == "black" ? "red" : "black"}</button>
      <button onClick={changeRadius}>{rd == "0px" ? "square" : "round"}</button>
    </div>
  );
};

export default Shape;
