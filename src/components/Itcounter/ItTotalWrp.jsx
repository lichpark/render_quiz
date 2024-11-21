import { useState } from "react";
import ItCounterQuiz from "./ItCounterQuiz";

const ItTotalWrp = () => {
  const [arr, setArr] = useState([
    { amount: 0, price: 20000 },
    { amount: 0, price: 10000 },
  ]);

  //총개수와 원은 어떻게 변해야 하는가?

  return (
    <div>
      <div>
        <ItCounterQuiz price={arr[0].price} init={arr[0].amount} />
        <ItCounterQuiz price={arr[1].price} init={arr[1].amount} />
      </div>
      <div>
        <div>총 개 </div>
        <div>원</div>
      </div>
    </div>
  );
};

export default ItTotalWrp;
