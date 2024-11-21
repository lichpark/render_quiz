import { useState } from "react";
import ItCount from "./ItCount";
import ItPrice from "./ItPrice";

const ItCounterQuiz = (props) => {
  const price = props.price;
  const cnt = props.init;
  const [total, setTotal] = useState(cnt);
  const minus = () => {
    setTotal((prev) => prev - 1);
  };
  const plus = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightgray",
        margin: "10px",
        borderRadius: "5px",
        width: "300px",
        padding: "10px",
      }}
    >
      <div>
        <ItCount minus={minus} plus={plus} total={total} />
      </div>
      <ItPrice total={total} price={price} />
    </div>
  );
};

export default ItCounterQuiz;
