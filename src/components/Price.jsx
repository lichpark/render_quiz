const Price = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: "5px" }}>
      {props.total * props.price}
    </div>
  );
};

export default Price;
