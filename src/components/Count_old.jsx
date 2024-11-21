import { useState } from "react";

const Count_old = () => {
  const [num, setNum] = useState("0");

  //   const numChg = (val) =>
  //     setNum((prev) =>
  //       val == "-"
  //         ? Number(prev) - 1
  //         : Number(prev) + 1
  //     );

  const numChg = (val) =>
    setNum((prev) =>
      val === "-"
        ? Number(prev) > 0
          ? Number(prev) - 1
          : "0"
        : Number(prev) + 1
    );

  return (
    <>
      <button onClick={() => numChg("-")}>-</button>
      <span>{num}</span>
      <button onClick={() => numChg("+")}>+</button>
    </>
  );
};

//export default Count;
