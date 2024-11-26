import { useState } from "react";
import { ClipLoader } from "react-spinners";

const ImageQuiz = ({ url, title, description }) => {
  const [loading, setLoding] = useState(true);
  return (
    <div>
      <div>{loading && <ClipLoader />}</div>
      <div>
        <img src={url} onLoad={() => setLoding(false)} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageQuiz;
