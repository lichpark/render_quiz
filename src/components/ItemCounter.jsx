import { useState } from "react";

const ItemCounter = () => {
  const price = 2000;
  const [total, setTotal] = useState(0);
  const minus = () => {
    setTotal((prev) => prev - 1);
  };
  const plus = () => {
    setTotal((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={minus}>-</button>
      <span>{total}</span>
      <button onClick={plus}>+</button>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        {total * price}
      </div>
    </>
  );
};

export default ItemCounter;
