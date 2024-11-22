const Input = (props) => {
  return (
    <div>
      <input
        type="password"
        placeholder={props.placeholder}
        style={{
          padding: "5px 10px",
          borderRadius: "7px",
          border: "1px solid grey",
        }}
        onChange={props.change}
      />
    </div>
  );
};

export default Input;
