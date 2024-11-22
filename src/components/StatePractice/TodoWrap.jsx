import { useState } from "react";
import TodoChk from "./TodoChk";

const TodoWrap = () => {
  const [checkArr, setCheck] = useState([
    { check: false, text: " 오전 수업 듣기" },
    { check: false, text: " 오후 수업 듣기" },
    { check: false, text: " 저녁약속 가기" },
    { check: false, text: " 집에 들어가기" },
    // { check: false, text: " 집정리 조금만 하기" },
    // array로 헸던 흔적
    // false,
    // false,
    // false,
  ]);

  const checkFunc = (param, e) => {
    setCheck((prev) => {
      //const newChkArr = [...prev];
      // newChkArr[param] = !newChkArr[param];

      const newChkArr = [...prev];
      newChkArr[param] = {
        ...newChkArr[param],
        check: !newChkArr[param].check,
      };
      return newChkArr;
    });
  };
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    if (input.trim() === "") return; // 빈 문자열 입력 방지
    setCheck((prev) => [...prev, { check: false, text: " " + input }]);
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="할일입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleAddTodo();
            }
          }} // 엔터키 이벤트 추가
        ></input>
        <button onClick={handleAddTodo}>할일추가</button>
      </div>
      {checkArr.map((v, idx) => {
        return (
          <TodoChk
            id={idx}
            text={v.text}
            check={(e) => checkFunc(idx, e)}
            key={idx}
            checkval={v.check}
          />
        );
      })}
      <div style={{ marginTop: "20px" }}>
        {checkArr.every((v) => v.check) ? "할일 완료!" : "완료 안됨"}
      </div>
      {/* <button onClick={() => console.log(checkArr)}>test</button> */}
    </div>
  );
};

export default TodoWrap;
