import "./App.css";
import CardGrid from "./components/AtomDesign/Template/CardGrid";
import Button from "./components/common/Button";
import ImogeButton from "./components/common/ImogeButton";
import InfoText from "./components/common/Text/InfoText";
import WornText from "./components/common/Text/WornText";
import Fruits from "./components/Fruits";

import Main from "./components/layout/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <CardGrid />
      <WornText text={"worn"} />
      <InfoText text={"info"} />
      <Button />
      <ImogeButton />
      <Fruits />
    </div>
  );
}

export default App;
