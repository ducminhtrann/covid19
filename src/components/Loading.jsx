import React from "react";

const Loading = ({ data }) => {
  const isCaches = data?.ID;
  return (
    <div className="loading">
      <div className="dot">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isCaches && <h2>{data?.Message}</h2>}
    </div>
  );
};

export default Loading;
