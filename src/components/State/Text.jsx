import { useDarkMode } from "../../context/DarkModeContext";

const Text = () => {
  const { isDarkMode } = useDarkMode();
  return <span style={{ color: isDarkMode ? "red" : "black" }}>Text</span>;
};

export default Text;
