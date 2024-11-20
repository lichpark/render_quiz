import { roomList } from "../../constants/data";
import Card from "../common/Card";

const Main = () => {
  const wrapperCss = {
    width: "400px",
    marginBottom: "5px",
  };
  return (
    <section style={wrapperCss}>
      {roomList.map((v) => {
        return <Card {...v} />;
      })}
    </section>
  );
};

export default Main;
