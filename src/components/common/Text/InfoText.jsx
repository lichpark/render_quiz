import Text from "./Text";

const InfoText = (props) => {
  return (
    <Text
      text={props.text}
      color={"green"}
      fontsize={"20"}
      fontweight={"bold"}
    />
  );
};

export default InfoText;
