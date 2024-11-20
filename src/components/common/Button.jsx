//상태[꼬라지] 관리 useState

import { useState } from "react";

const Button = () => {
  //class -> 이쪽을 살펴봐야 한다.
  // text 는 text에 들어간 데이터 역할 밖에 안됨
  const [text, setText] = useState("버튼");

  const change = () => {
    setText(() => {
      return "뻐튼!";
    });
  };

  return <button onClick={change}>{text}</button>;
};

export default Button;
