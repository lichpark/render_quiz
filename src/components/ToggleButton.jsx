import { useState } from "react";

const ToggleButton = (props) => {
  //   console.log(props);
  const [isToggle, setIsToggle] = useState(props.text);

  const chgToggle = () =>
    setIsToggle((prev) =>
      prev == props.text ? props.text + props.emoji : props.text
    );

  return <button onClick={chgToggle}>{isToggle}</button>;
};

export default ToggleButton;
