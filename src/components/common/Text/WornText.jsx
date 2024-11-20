import Text from "./Text";

const WornText = (props) => {
  return (
    <div>
      <Text
        text={props.text}
        color={"red"}
        fontsize={"20"}
        fontweight={"bold"}
      />
    </div>
  );
};

export default WornText;
