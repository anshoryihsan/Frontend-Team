import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReceiverCard } from "../../../components/Cards";
import { useHistory, useParams } from "react-router-dom";
import { currency } from "../../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { getFindId } from "../../../redux/actions/user";

function TransferConfirm() {
  const history = useHistory();
  const { token } = useSelector((state) => state.Auth);
  const { userdata, findId } = useSelector((state) => state.User);
  const { id } = useParams();

  const params = new URLSearchParams(window.location.search);
  const amount = params.get("amount");
  const note = params.get("note");
  const date = new Date().toISOString().split("T")[0];

  const dispatch = useDispatch();

  useEffect(() => {
    if (userdata.balance === 0 || userdata.balance < amount)
      history.push("/dashboard");

    dispatch(getFindId(token, id));
  }, [userdata.balance, amount, history, id, token, dispatch]);

  return (
    <>
      <nav className="py-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn pr-4 p-0 shadow-none" onClick={() => history.goBack()}>
            <img
              src="/assets/images/icons/arrow-left.svg"
              height="24px"
              width="24px"
              alt="arrow"
            />
          </button>
          <div className="font-weight-bold ">Confirmation</div>
        </div>
      </nav>

      <div className="p-2 rounded-14 ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">Transfer Money</div>
        </div>
      </div>
      <ReceiverCard
        disabled
        src={findId.photo}
        name={findId.name}
        phone={findId.phone ? `+62 ${findId.phone}` : "-"}
        className="mx-2 shadow-sm rounded-14 bg-white mb-4"
      />
      <div className="p-2 rounded-14 my-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">Detail</div>
        </div>
      </div>

      <div className="shadow-sm rounded-14 p-3 bg-white m-2">
        <div className="small">Amount</div>
        <div className="font-weight-bold text-dark">Rp{currency(amount)}</div>
      </div>

      <div className="shadow-sm rounded-14 p-3 bg-white m-2">
        <div className="small">Balance Left</div>
        <div className="font-weight-bold text-dark">
          Rp{currency(parseInt(userdata.balance) - parseInt(amount))}
        </div>
      </div>

      <div className="shadow-sm rounded-14 p-3 bg-white m-2">
        <div className="small">Date & Time</div>
        <div className="font-weight-bold text-dark">{date}</div>
      </div>

      <div className="shadow-sm rounded-14 p-3 bg-white m-2">
        <div className="small">Notes</div>
        <div className="font-weight-bold text-dark">{note}</div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <Button
          color="primary"
          className="py-2 px-5"
          onClick={() => history.push({ pathname: `/m/dashboard/transfer/${id}/confirm-pin`, search: window.location.search })}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default TransferConfirm;
