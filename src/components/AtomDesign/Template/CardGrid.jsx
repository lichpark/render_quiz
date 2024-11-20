import { dummy } from "../../../constants/mock";
import { cardgridcss } from "../../style/style";
import Card from "../organisms/Card";

const CardGrid = () => {
  return (
    <div style={cardgridcss}>
      {dummy.map((v) => (
        <Card {...v} />
      ))}
    </div>
  );
};

export default CardGrid;
