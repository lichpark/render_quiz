import { useState } from "react";
import Count from "./Count";
import Price from "./Price";

const ItemCounter = () => {
  const [total, setTotal] = useState(0);
  const minus = () => {
    setTotal((prev) => prev - 1);
  };
  const plus = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <>
      <Count minus={minus} plus={plus} total={total} />
      <Price price={10000} total={total} />
    </>
  );
};

export default ItemCounter;
