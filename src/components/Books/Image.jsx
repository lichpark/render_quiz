import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Image = ({ url, title, description }) => {
  const [loading, setLoading] = useState(true); // 개별 로딩 상태 관리

  return (
    <div>
      {loading && <ClipLoader />}
      <img
        src={url}
        alt={description}
        onLoad={() => setLoading(false)} // 이미지 로딩 완료 시 호출
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Image;
