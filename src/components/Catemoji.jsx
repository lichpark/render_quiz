import { useState } from "react";

const Catemoji = () => {
  const [cat, setCat] = useState("😺");
  // const [cat1, setCat1] = useState("😺");
  // const [cat2, setCat2] = useState("😺");

  const change = () => setCat((prev) => (prev == "😻" ? "😺" : "😻"));
  // const change1 = () => setCat1((prev) => (prev=="😹"?"😺":"😹"));
  // const change2 = () => setCat2((prev) => (prev=="😿"?"😺":"😿"));

  return (
    <div>
      <button onClick={change}>{cat}</button>
      {/* <button onClick={change1}>{cat1}</button>
      <button onClick={change2}>{cat2}</button> */}
    </div>
  );
};

export default Catemoji;
