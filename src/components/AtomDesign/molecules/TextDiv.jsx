import { textDivcss } from "../../style/style";
import JobText from "../atoms/JobText";
import NameText from "../atoms/NameText";

const TextDiv = (props) => {
  return (
    <div style={textDivcss}>
      <NameText {...props} />
      <JobText {...props} />
    </div>
  );
};

export default TextDiv;
