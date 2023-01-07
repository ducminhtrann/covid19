import React from "react";

const Loading = ({ data }) => {
  console.log("data trong loading: ", data);
  const isCaches = !!data?.Message;
  console.log({ isCaches });
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
