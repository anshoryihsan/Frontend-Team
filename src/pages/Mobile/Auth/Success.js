import React from "react";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();

  return (
    <div className="py-3 text-center">
      <img
        src={
          window.location.origin +
          "/zwallet/assets/images/icons/success-circle.svg"
        }
        height="70px"
        width="70px"
        alt="images"
      />
      <h5 className="font-weight-bold my-4">
        Your PIN Was Successfully Created.
      </h5>

      <div className="text-black-50 mt-3 mb-5">
        Your PIN was successfully created and you can now access all the
        features in Zwallet. Login to your new account and start exploring!
      </div>

      <button
        onClick={() => history.push("/m/dashboard")}
        className="btn btn-primary w-100 py-3 rounded-14 d-block mt-4"
      >
        To Dashboard
      </button>
    </div>
  );
}

export default Success;
