import React from "react";

const Loading = ({ isCaches = false }) => {
  console.log({ isCaches });
  return (
    <div className="loading">
      <div className="dot">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isCaches && <h2>Process in caching...</h2>}
    </div>
  );
};

export default Loading;
