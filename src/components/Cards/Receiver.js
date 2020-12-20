import React from "react";
import { Link } from "react-router-dom";

function ReceiverCard(props) {
  const { phone, name, className, to, src, disabled } = props;
  return (
    <div
      className={`d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 bg-white ${className} py-3 mb-2`}
    >
      <div className="d-flex align-items-center">
        <img
          className="rounded-14 object-cover"
          src={src ? src : "/zwallet/assets/images/icons/default.svg"}
          height="56px"
          width="56px"
          alt="images"
        />

        <div className="pl-3">
          {!disabled ? (
            <Link to={to} className="font-weight-bold text-dark">
              {name}
            </Link>
          ) : (
            <div className="font-weight-bold text-dark">{name}</div>
          )}
          <div className="small">{phone}</div>
        </div>
      </div>
    </div>
  );
}

export default ReceiverCard;
