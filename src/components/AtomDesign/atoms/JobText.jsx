import { JobTextcss } from "../../style/style";

const JobText = (props) => {
  return <div style={JobTextcss}>{props.job}</div>;
};

export default JobText;
