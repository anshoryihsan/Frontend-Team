import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currency } from "../../../helpers";
import { getHistoryTopup } from "../../../redux/actions/user";

function TransferStatus() {
  const { token } = useSelector((state) => state.Auth);
  const { historyId } = useSelector((state) => state.User);

  const params = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getHistoryTopup(token, history, params.get("order_id")));
  }, [dispatch, history, token]);

  const date = new Date(historyId?.created_at);
  const paydate = new Date(historyId?.paydate_at);

  return (
    <>
      <div className="bg-secondary mx-2 vh-100">
        <div className="d-flex align-items-center flex-column my-3">
          <img
            src={
              window.location.origin +
              "/zwallet/assets/images/icons/success-circle.svg"
            }
            height="50px"
            width="50px"
            alt="success"
          />
          <div className="font-weight-bold mt-3">Topup Success</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">No. Rek</div>
          <div className="font-weight-bold text-dark">
            {historyId.va_number}
          </div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Transfer Bank</div>
          <div className="font-weight-bold text-dark text-uppercase">
            {historyId.va_type}
          </div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Amount</div>
          <div className="font-weight-bold text-dark">
            Rp{currency(historyId?.amount_topup)}
          </div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Status</div>
          <div className="font-weight-bold text-dark">
            {historyId.status === 1 ? "Success" : "Pending"}
          </div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">
            {date.toDateString()} {date.toLocaleTimeString()}
          </div>
        </div>

        {historyId.paydate_at ? (
          <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
            <div className="small">Date & Time Pay Transaction</div>
            <div className="font-weight-bold text-dark">
              {paydate.toDateString()} {paydate.toLocaleTimeString()}
            </div>
          </div>
        ) : null}

        <div className="d-flex justify-content-center my-4">
          <Link
            to="/m/dashboard"
            className="py-3 lg-6 px-5 rounded-14 btn btn-primary w-100"
            width="200px"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default TransferStatus;
