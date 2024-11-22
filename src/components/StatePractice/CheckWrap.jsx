import { useState } from "react";
import Check from "./Check";

const CheckWrap = () => {
  //   const [ischeckFirst, setIsChecked1] = useState(false);
  //   const [ischeckSecond, setIsChecked2] = useState(false);
  //useState 활용법
  // 1. 초기 세팅을 먼저 하기
  const [ischk, setIschk] = useState(Array(3).fill(false));

  //   const change1 = () => {
  //     setIsChecked1((prev) => !prev);
  //   };

  //   const change2 = () => {
  //     setIsChecked2((prev) => !prev);
  //   };
  const change = (param, e) => {
    setIschk((prev) => {
      const newIschk = [...prev];
      newIschk[param] = !newIschk[param];
      return newIschk;
    });
  };

  return (
    <div>
      {/* <Check change={change1} isCheck={ischeckFirst} />
      <Check change={change2} isCheck={ischeckSecond} />
      <button>{ischeckFirst && ischeckSecond ? "pass" : "fail"}</button> */}
      {ischk.map((v, idx) => {
        return <Check change={() => change(idx)} ischeck={v} key={idx} />;
      })}
      <button>{ischk.every((v) => v) ? "pass" : "fail"}</button>
    </div>
  );
};

export default CheckWrap;
