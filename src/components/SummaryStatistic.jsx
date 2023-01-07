import React from "react";
import { getTime } from "../const";
import SummaryItem from "./SummaryItem";

const SummaryStatistic = ({ data, refer }) => {
  if (!data?.ID) return <p>{data?.Message}</p>;
  return (
    <div className="summary" ref={refer}>
      <h2 className="summary__head">Latest Statisfic</h2>
      <div className="summary__head--time">
        <span>Update: </span>
        <span>{getTime(data?.Global?.Date).time}</span>
      </div>
      <div className="summary__head--ago">
        <p>({getTime(data?.Global?.Date).ago})</p>
      </div>
      <div className="summary__body">
        <SummaryItem
          type={"confirm"}
          newNum={data?.Global?.NewConfirmed}
          totalNum={data?.Global?.TotalConfirmed}
        />
        <SummaryItem
          type={"recover"}
          newNum={data?.Global?.NewRecovered}
          totalNum={data?.Global?.TotalRecovered}
        />
        <SummaryItem
          type={"death"}
          newNum={data?.Global?.NewDeaths}
          totalNum={data?.Global?.TotalDeaths}
        />
      </div>
    </div>
  );
};

export default SummaryStatistic;
