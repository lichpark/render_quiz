import { useDark } from "../../../context/useDark";
import Text from "./Text";

const Card = ({}) => {
  const { isDark } = useDark();
  return (
    <article>
      <img
        style={{ width: "50px", height: "50px", borderRadius: "9999px" }}
        src={process.env.PUBLIC_URL + "logo192.png"}
        alt="atom"
        title="atom"
      />
      <h3>{isDark ? "Dark" : "white"}</h3>
      <Text />
    </article>
  );
};

export default Card;
