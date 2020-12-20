import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import { ReceiverCard } from "../../../components/Cards";
import {
  InputBorderless,
  InputBorderedBottom,
} from "../../../components/Inputs";
import { useHistory, useParams, Link } from "react-router-dom";
import { currency } from "../../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { getFindId } from "../../../redux/actions/user";

function TransferProcess() {
  const [amount, setAmount] = useState("");
  const [amountFocus, setAmountFocus] = useState(false);
  const [note, setNote] = useState("");
  const [noteFocus, setNoteFocus] = useState(false);

  const history = useHistory();
  const { id } = useParams();
  const { token } = useSelector((state) => state.Auth);
  const { userdata, findId } = useSelector((state) => state.User);

  const dispatch = useDispatch();

  const _changeAmount = (e) => {
    setAmount(e.target.value.replace(/[^0-9]/g, ""));
    e.target.value = "Rp" + currency(e.target.value.replace(/[^0-9]/g, ""));
  };

  useEffect(() => {
    dispatch(getFindId(token, id));
  }, [token, id, dispatch]);

  return (
    <div className="bg-secondary">
      <div className="d-flex justify-content-between align-items-center py-2">
        <Link to="/m/dashboard/transfer">
          <img
            src={
              window.location.origin +
              "/zwallet/assets/images/icons/arrow-left.svg"
            }
            height="24px"
            width="24px"
            alt="plus"
            className="mr-3"
          />
        </Link>

        <div className="font-weight-bold mr-auto">Transfer</div>
      </div>

      <div className="mt-4 p-2 ">
        <ReceiverCard
          disabled
          src={findId.photo}
          name={findId.name}
          phone={findId.phone ? `+62 ${findId.phone}` : "-"}
          className="  "
        />
      </div>

      <div className="rounded-14 shadow-none vh-85">
        <div className="text-center font-weight-bold mb-1">
          Rp{currency(parseInt(userdata.balance))} Available
        </div>

        <InputBorderless
          label="0.00"
          onChange={_changeAmount}
          onFocus={() => setAmountFocus(true)}
          onBlur={() => setAmountFocus(false)}
          isFocused={amountFocus}
          weight="bold"
          fontSize={36}
          fontColor="primary"
        />

        <div className="d-flex justify-content-center">
          <div className="w-100">
            <InputBorderedBottom
              iconName="edit"
              label="Add some notes"
              onChange={(e) => setNote(e.target.value)}
              onFocus={() => setNoteFocus(true)}
              onBlur={() => setNoteFocus(false)}
              isFocused={noteFocus}
              value={note}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button
            onClick={() =>
              history.push(
                `/m/dashboard/transfer/${id}/confirm?amount=${amount}&note=${note}`
              )
            }
            // color="primary"
            // className="py-2 px-4 w-100"
            className={`w-100 btn  py-3 mt-3 rounded-14  ${
              userdata.balance === 0 ||
              userdata.balance < amount ||
              amount === "" ||
              note === ""
                ? "bg-gray"
                : "btn-primary"
            }`}
            disabled={
              userdata.balance === 0 ||
              userdata.balance < amount ||
              amount === "" ||
              note === ""
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferProcess;
