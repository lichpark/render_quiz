import { useDark } from "../../../context/useDark";

const Text = () => {
  const { isDark } = useDark();
  return <span style={{ color: isDark ? "red" : "black" }}>Text</span>;
};

export default Text;
