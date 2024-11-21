import ToggleButton from "./ToggleButton";

const LikeButton = () => {
  const buttonarr = [
    { text: "좋아요", emoji: "❤️" },
    { text: "구독", emoji: "🔔" },
  ];

  //ToggleButton props
  //좋아요 누르면 좋아요 ❤️
  //좋아요 ❤️ => 좋아요

  //구독 누르면 구독 🔔
  //구독 🔔 => 구독
  return buttonarr.map((v) => <ToggleButton {...v} />);
};

export default LikeButton;
