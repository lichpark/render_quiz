const Text = (props) => {
  return (
    <div
      style={{
        color: `${props.color}`,
        fontSize: `${props.fontsize}px`,
        fontWeight: `${props.fontweight}`,
      }}
    >
      {props.text}
    </div>
  );
};

export default Text;
