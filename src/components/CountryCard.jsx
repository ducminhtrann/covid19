import React from "react";
import { formatNumber } from "../const";

const CountryCard = ({ pos, data, onClick }) => {
  return (
    <div
      className="country"
      onClick={() => onClick(data?.CountryCode.toLowerCase())}
    >
      <h3 className="country__name">{`${pos}. ${data?.Country}`}</h3>
      <div className="country__number">
        <div>
          <span>Total Confirmed</span>
          <h3 className="country__number--confirm">
            {formatNumber(data?.TotalConfirmed)}
          </h3>
        </div>
        <div className="country__number--dead">
          <span>Total Deaths</span>
          <h3>{formatNumber(data?.TotalDeaths)}</h3>
        </div>
        <div className="country__number--recover">
          <span>Total Recovered</span>
          <h3>{formatNumber(data?.TotalRecovered)}</h3>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
