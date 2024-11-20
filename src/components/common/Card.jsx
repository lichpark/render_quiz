import RoundButton from "./RoundButton";

const Card = (props) => {
  const css = {
    display: "flex",
    gap: "15px",
    borderTop: "1px solid #ededed",
    borderBottom: "1px solid #ededed",
    padding: "3px",
    width: "100%",
    height: "200px",
  };
  const img__div_css = {
    width: "140px",
    padding: "5px",
    position: "relative",
  };
  const img__div__span = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  };
  const img__div__img_css = {
    width: "140px",
    height: "168px",
    objectFit: "cover",
  };
  const desc__div_css = {
    color: "rgb(34, 34, 34)",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  };
  const desc__div_title_css = {
    fontWeight: "bold",
    fontSize: "18px",
    color: "rgb(34, 34, 34)",
    marginBottom: "2px",
    lineHeight: "30px",
  };

  const desc_typename = {
    color: "rgb(34, 34, 34)",
  };
  return (
    <article style={css}>
      <div style={img__div_css}>
        <img
          src={props.imgUrlList[0]}
          alt=""
          title={props.roomTitle}
          style={img__div__img_css}
        />
        <span style={img__div__span}>
          <button style={{ backgroundColor: "transparent", border: "none" }}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              style={{ fill: "white" }}
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>
          </button>
        </span>
      </div>
      <div style={desc__div_css}>
        <div style={desc__div_title_css}>
          {props.priceTypeName} {props.priceTitle}
        </div>
        <div style={desc_typename}>{props.roomTypeName}</div>
        <div>{props.roomDesc}</div>
        <div>{props.roomTitle}</div>
        <div>{props.isExtendUI ? <RoundButton /> : ""}</div>
      </div>
    </article>
  );
};

export default Card;
