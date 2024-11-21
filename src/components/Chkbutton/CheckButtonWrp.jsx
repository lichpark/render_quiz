import { useState } from "react";
import CheckButtonSmall from "./ChkButtonSmall";

const CheckButtonWrp = () => {
  const [checkList, setCheckList] = useState([false, false]);

  //   const changeOne = () =>
  //     setCheckList((prev) => {
  //       prev[0] = !prev[0]
  //       return prev[0];
  //     });

  //   //useState(참조타입) : 참조타입이 들어간 경우에는 새롭개 변수를 넣고 빼줘야 바뀐다고 인식한다.
  const changeOne = () =>
    setCheckList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[0] = !newCheckedList[0];
      return newCheckedList;
    });

  const changeTwo = () =>
    setCheckList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[1] = !newCheckedList[1];
      return newCheckedList;
    });

  return (
    <div>
      <CheckButtonSmall checked={checkList[0]} change={changeOne} />
      <CheckButtonSmall checked={checkList[1]} change={changeTwo} />
      <div>
        <button
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "9px",
            backgroundColor: checkList.every((v) => v) ? "pink" : "white",
            border: `1px solid black`,
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CheckButtonWrp;
