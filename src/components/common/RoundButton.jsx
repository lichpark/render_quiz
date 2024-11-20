const RoundButton = () => {
  const buttonCss = {
    padding: "1px 5px",
    borderRadius: "2px",
    fontSize: "12px",
    lineHeight: "20px",
    color: "rgb(139, 124, 253)",
    border: "1px solid rgb(139, 124, 253)",
    backgroundColor: "transparent",
  };
  return <button style={buttonCss}>플러스</button>;
};

export default RoundButton;
