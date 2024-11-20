import { useState } from "react";

const FruitButton = (props) => {
  const [cat, setCat] = useState(props.cat);
  const chgCat = () => {
    setCat(() => (cat == props.setCat ? props.cat : props.setCat));
  };

  return <button onClick={chgCat}>{cat}</button>;
};

export default FruitButton;
