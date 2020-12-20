import React from "react";
import { InNotifCard, OutNotifCard } from "../../../../components/Cards";
import "./styles.css";
function index(props) {
  const { onClose, active } = props;
  return (
    <div className="container d-flex justify-content-center justify-content-md-end">
      <div
        className={`notification shadow-lg rounded-14 bg-white p-4 ${
          active ? "active" : ""
        }`}
      >
        <div className="d-flex align-items-center justify-content-end position-absolute w-100 pr-5">
          <button type="button" className="btn p-0" onClick={onClose}>
            <img
              alt="x"
              src={
                window.location.origin + "/zwallet/assets/images/icons/x.svg"
              }
              height="28px"
              width="28px"
            />
          </button>
        </div>

        <div>Today</div>

        <InNotifCard label="Tes" amount="100000" />
        <OutNotifCard label="Tes" amount="100000" />
      </div>
    </div>
  );
}

export default index;
