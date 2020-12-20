import React, { useEffect } from "react";
import { ReceiverCard } from "../../../components/Cards";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currency } from "../../../helpers";
import { getHistoryId } from "../../../redux/actions/user";

function TransferStatus() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.Auth);
  const { historyId } = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getHistoryId(token, id, history));
  }, [dispatch, history, id, token]);

  const date = new Date(historyId?.created_at);
  return (
    <>
      <div className="bg-secondary mx-2 vh-100">
        <div className="d-flex align-items-center flex-column my-3 mt-3">
          <img
            src={
              window.location.origin +
              "/zwallet/assets/images/icons/success-circle.svg"
            }
            height="50px"
            width="50px"
            alt="success"
          />
          <div className="font-weight-bold mt-3 mb-5">Transfer Success</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Detail</div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Amount</div>
          <div className="font-weight-bold text-dark">
            Rp{currency(parseInt(historyId.amount))}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Balance Left</div>
          <div className="font-weight-bold text-dark">
            Rp{currency(parseInt(historyId.balance))}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">
            {date.toDateString()} {date.toLocaleTimeString()}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Notes</div>
          <div className="font-weight-bold text-dark">{historyId.note}</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Transfer to</div>
        </div>

        <ReceiverCard
          disabled
          name={historyId.name}
          phone={historyId.phone ? historyId.phone : "-"}
          src={historyId.photo}
          className="my-2 shadow-sm bg-white"
        />

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
