import React from "react";
import "./App.css";
// import CardGrid from "./components/AtomDesign/Template/CardGrid";
// import Button from "./components/common/Button";
// import ImogeButton from "./components/common/ImogeButton";
// import InfoText from "./components/common/Text/InfoText";
// import WornText from "./components/common/Text/WornText";
// import Count from "./components/Count";

// import Fruits from "./components/Fruits";
// import ItemCounter from "./components/ItemCounter";

// import Main from "./components/layout/Main";
// import LikeButton from "./components/LikeButton";

// import Shape from "./components/Shape";
// import Shape1 from "./components/Shape1";
// import ItCounterQuiz from "./components/Itcounter/ItCounterQuiz";
// import ItTotalWrp from "./components/Itcounter/ItTotalWrp";
// import CheckButtonWrp from "./components/Chkbutton/CheckButtonWrp";
// import InputWrap from "./components/StatePractice/InputWrap";
// import CheckWrap from "./components/StatePractice/CheckWrap";
// import TodoWrap from "./components/StatePractice/TodoWrap";
// import Book from "./components/Books/Book";
// import Image from "./components/Books/Image";
// import { ClipLoader } from "react-spinners";
// import ImageQuiz from "./components/Books/ImageQuiz";
import { useDarkMode } from "./context/DarkModeContext";
// import Card from "./components/State/Card";
import Card from "./components/State/Justand/Card";
import { useDark } from "./context/useDark";
import { Kbd, Theme } from "@radix-ui/themes";

function App() {
  // const [total, setTotal] = useState(0);
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakerapi.it/api/v2/books?_quantity=5")
  //     .then((res) => res.json())
  //     .then((v) => setBooks((prev) => [...v.data]));
  // }, []);

  // const [Images, setImages] = useState([]);
  // const [test, setTest] = useState(false);

  // useEffect(() => {
  //   console.log("start");
  //   fetch("https://fakerapi.it/api/v2/images?_quantity=5&_type=any&_height=300")
  //     .then((res) => res.json())
  //     .then(
  //       (v) => setImages((prev) => [...v.data]) // 데이터를 상태에 저장
  //     );
  // }, [test]);

  //유저에거 input으로 이미지 갯수 입력받고, 요청 버튼 누르면 받아온거만큼 컴포넌트 만들고 데이터 가져오는동안 스피너

  // const [quizImage, setQuizImage] = useState([]); // 이미지 데이터
  // const [insVal, setInsVal] = useState("0"); // 입력 값

  // useEffect(() => {
  //   if (Number(insVal) > 0) {
  //     fetch(
  //       `https://fakerapi.it/api/v2/images?_quantity=${insVal}&_type=any&_height=300`
  //     )
  //       .then((res) => res.json())
  //       .then((v) => setQuizImage((prev) => [...v.data])) // 데이터 상태 업데이트
  //       .catch((err) => console.error("Error fetching data:", err));
  //   }
  // }, [insVal]);

  // const chgval = () => {
  //   const ins = document.getElementById("ins").value;
  //   setInsVal(ins);
  // };

  //state management
  //useState
  //useContext
  //redux/zustand
  //글로벌 상태관리로 뺄거임 (state management )
  // const { isDarkMode, toggleDarkMode } = useDarkMode();

  const { toggleDark } = useDark();

  return (
    <div className="App">
      {/*  */}
      {/* <Main />
      <CardGrid />
      <WornText text={"worn"} />
      <InfoText text={"info"} />
      <Button />
      <ImogeButton />
      <Fruits /> */}
      {/* <Count /> */}
      {/* <Shape />
      <Shape1 /> */}
      {/* <LikeButton /> */}
      {/* <ItemCounter /> */}
      {/* <ItTotalWrp /> */}
      {/* <CheckButtonWrp /> */}
      {/* <InputWrap />
      <CheckWrap />
      <TodoWrap /> */}
      {/*  */}
      {/* {books.map((v) => (
        <Book {...v} />
      ))} */}
      {/*  */}
      {/* <div>
        <button onClick={() => setTest((prev) => !prev)}>
          로켓트 클릭클릭
        </button>
        {Images.map((v, index) => (
          <Image key={index} {...v} />
        ))}
      </div> */}
      {/* <input id="ins" type="number" />
      <button onClick={() => chgval()}>요청</button>
      <div>
        {quizImage.map((v, idx) => (
          <ImageQuiz key={idx} {...v} />
        ))}
      </div> */}
      {/* <button onClick={() => toggleDarkMode()}>button</button>
      <Card isDarkMode={isDarkMode} /> */}
      {/* <button onClick={() => toggleDark()}>button</button>
      <Card /> */}
      <div
        style={{
          backgroundColor: "blue",
          width: "40%",
          height: "100px",
          textAlign: "center",
        }}
      >
        <Kbd>shift+Tab</Kbd>
      </div>
    </div>
  );
}

export default App;
