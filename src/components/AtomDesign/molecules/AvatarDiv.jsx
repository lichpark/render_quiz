import { AvatarDivCss } from "../../style/style";
import Avatar from "../atoms/Avatar";

const AvatarDiv = (props) => {
  return (
    <div style={AvatarDivCss}>
      <Avatar {...props} />
    </div>
  );
};

export default AvatarDiv;
