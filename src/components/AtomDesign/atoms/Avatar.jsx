import { AvatarDivCss, AvatarDivImgCss } from "../../style/style";

const Avatar = (props) => {
  return (
    <>
      <img src={props.imgSrc} style={AvatarDivImgCss} alt={props.name} />
    </>
  );
};

export default Avatar;
