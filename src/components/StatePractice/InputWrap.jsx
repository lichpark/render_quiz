import { useState } from "react";
import Input from "./Input";

const InputWrap = () => {
  const placeholder = ["비밀번호 입력", "비밀번호 확인"];
  const [inputText, setInputText] = useState(["", ""]);
  const checkPass = (params, e) => {
    setInputText((prev) => {
      const newText = [...prev];
      newText[params] = e.target.value;
      return newText;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {/* <Input
        placeholder="비밀번호 입력"
        change={(e) => {
          checkPass("0", e);
        }}
      />
      <Input
        placeholder="비밀번호 확인"
        change={(e) => {
          checkPass("1", e);
        }}
      /> */}
      {inputText.map((v, idx) => {
        //console.log(idx);
        return (
          <Input
            change={(e) => {
              checkPass(idx, e);
            }}
            placeholder={placeholder[idx]}
            key={idx}
          />
        );
      })}
      <div>
        <button
          style={{
            backgroundColor: inputText[0] === inputText[1] ? "gray" : "black",
            color: inputText[0] === inputText[1] ? "darygray" : "white",
          }}
          onClick={() => {
            console.log(inputText);
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default InputWrap;
