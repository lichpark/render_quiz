const InputTest = () => {
  const [num, setNum] = useState("0");
  const change = (e) => {
    setNum(e.target.value.length);
  };

  const [ispass, setIsPass] = useState(false);
  const quizchg = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;

    setNum(e.target.value.length);

    if (length < 4 || length > 12) {
      setIsPass((prev) => false);
    } else if (!["!", "@", "#"].some((v) => value.includes(v))) {
      setIsPass((prev) => false);
    } else {
      setIsPass((prev) => true);
    }
  };

  return (
    <>
      <input type="text" onChange={change} />
      <span>{num}</span>
      // input 4~12글자 사이 , !@# 하나라도 안맞으면 오류 , 맞으면 통과
      <input type="text" onChange={quizchg} />
      <span>{num}</span>
      <span>{ispass == true ? "pass" : "error"}</span>
    </>
  );
};

export default InputTest;
