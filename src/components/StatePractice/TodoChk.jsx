const TodoChk = (props) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        style={{
          textDecoration: props.checkval ? "line-through" : "none",
          color: props.checkval ? "gray" : "black",
        }}
      >
        <input
          type="checkbox"
          id={props.id}
          style={{}}
          onClick={props.check}
          key={props.idx}
        />
        {props.text}
      </label>
    </div>
  );
};

export default TodoChk;
