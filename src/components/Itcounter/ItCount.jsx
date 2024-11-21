const ItCount = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <button onClick={props.minus} style={{ backgroundColor: "white" }}>
        -
      </button>
      <span style={{ padding: "15px" }}>{props.total}</span>
      <button onClick={props.plus} style={{ backgroundColor: "white" }}>
        +
      </button>
    </div>
  );
};

export default ItCount;
