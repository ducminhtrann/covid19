import React from "react";
import confirm from "../assets/confirm.png";
import recover from "../assets/recover.png";
import death from "../assets/death.png";
import { formatNumber } from "../const";

const SummaryItem = ({ type, newNum, totalNum }) => {
  const img = {
    confirm: confirm,
    recover: recover,
    death: death,
  };
  const text = {
    confirm: {
      new: "New Confirmed",
      total: "Total Confirmed",
    },
    recover: {
      new: "New Recovered",
      total: "Total Recovered",
    },
    death: {
      new: "New Deaths",
      total: "Total Deaths",
    },
  };
  return (
    <div className={`summary__item ${type}`}>
      <img src={img[type]} alt="confirm-img" width={64} height={64} />
      <div className="summary__text">
        <div>
          <span>{text[type].new}</span>
          <h3>{formatNumber(newNum)}</h3>
        </div>
        <div>
          <span>{text[type].total}</span>
          <h3>{formatNumber(totalNum)}</h3>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
