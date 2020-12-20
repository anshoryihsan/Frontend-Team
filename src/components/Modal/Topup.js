import React from "react";
import { Modal } from "react-bootstrap";
import { currency } from "../../helpers";
function Topup(props) {
  const { show, onDismiss, onContinue } = props;
  const data = ["10000", "25000", "50000", "100000", "250000", "500000"];
  return (
    <Modal show={show} keyboard={false} animation={false} centered>
      <Modal.Body className="p-lg-4">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="font-weight-bold">Topup Amount</h5>
          <button
            type="button"
            className="btn p-0 shadow-none"
            onClick={onDismiss}
          >
            <img
              src={"/zwallet/assets/images/icons/x.svg"}
              height="28px"
              width="28px"
              alt="x"
            />
          </button>
        </div>

        {data.map((item, key) => (
          <button
            className="btn shadow-none btn-outline-primary py-3 my-1 w-100 text-left small font-weight-bold"
            onClick={() => onContinue(item)}
            key={key}
          >
            Rp {currency(item)}
          </button>
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default Topup;
