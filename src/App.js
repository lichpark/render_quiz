import { useState } from "react";
import "./App.css";
import CardGrid from "./components/AtomDesign/Template/CardGrid";
import Button from "./components/common/Button";
import ImogeButton from "./components/common/ImogeButton";
import InfoText from "./components/common/Text/InfoText";
import WornText from "./components/common/Text/WornText";
import Count from "./components/Count";

import Fruits from "./components/Fruits";
import ItemCounter from "./components/ItemCounter";

import Main from "./components/layout/Main";
import LikeButton from "./components/LikeButton";

import Shape from "./components/Shape";
import Shape1 from "./components/Shape1";
import ItCounterQuiz from "./components/Itcounter/ItCounterQuiz";
import ItTotalWrp from "./components/Itcounter/ItTotalWrp";
import CheckButtonWrp from "./components/Chkbutton/CheckButtonWrp";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
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
      <CheckButtonWrp />
    </div>
  );
}

export default App;
