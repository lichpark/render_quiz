const Book = ({ image, title, description }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        gap: "15px",
        borderRadius: "30px",
        padding: "10px 15px",
      }}
    >
      <img
        src={image}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Book;
