import { CardCss } from "../../style/style";
import AvatarDiv from "../molecules/AvatarDiv";
import TextDiv from "../molecules/TextDiv";

const Card = (props) => {
  return (
    <article style={CardCss}>
      <AvatarDiv {...props} />
      <TextDiv {...props} />
    </article>
  );
};

export default Card;
