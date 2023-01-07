import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { formatNumber } from "../const";

const CountryModal = ({ data, onCancel }) => {
  return (
    <div className="modal" onClick={onCancel}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <p className="modal__head--title">
            Information of {data?.name?.common}
          </p>
          <span className="modal__head--close" onClick={onCancel}>
            <MdOutlineClose />
          </span>
        </div>
        <div className="modal__body">
          <div className="modal__body--img">
            <img src={data?.flags?.png} alt="flag_country" />
          </div>
          <div className="modal__body--text">
            <span>Official name</span>
            <span>{data?.name?.official}</span>
          </div>
          <div className="modal__body--text">
            <span>Population</span>
            <span>{formatNumber(data?.population)}</span>
          </div>
          <div className="modal__body--text">
            <span>Region</span>
            <span>{data?.region}</span>
          </div>
          <div className="modal__body--text">
            <span>Subregion</span>
            <span>{data?.subregion}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
