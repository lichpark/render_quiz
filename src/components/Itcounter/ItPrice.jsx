const ItPrice = (props) => {
  return (
    <div style={{ fontWeight: "bold", padding: "5px" }}>
      {(props.total * props.price).toLocaleString()}원
    </div>
  );
};

export default ItPrice;
