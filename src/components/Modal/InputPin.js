import React from 'react'
import { Modal, Row } from 'react-bootstrap'
import { PinInputBorder } from '../Inputs'
function InputPin(props) {
  const { show, onDismiss, onChange, onContinue, error } = props
  return (
    <Modal
      show={show}
      keyboard={false}
      animation={false}
      centered
    >
      <Modal.Body className="p-lg-4">
        <div className="d-flex justify-content-between">
          <div className="font-weight-bold">Enter PIN to Transfer</div>
          <button
            type="button"
            className="btn p-0"
            onClick={onDismiss}
          >
            <img
              src={window.location.origin + "/assets/images/icons/x.svg"}
              height="28px"
              width="28px"
              alt="x"
            />
          </button>
        </div>
        <div className="w-75 small mt-3">
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </div>

        <Row className="my-5 no-gutters">
          <PinInputBorder className="col-2 px-2 px-lg-0" length={6} onChange={onChange} />
        </Row>

        {error ? <div className="my-3 text-center small text-danger">{error}</div> : null}

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary py-2 px-4" onClick={onContinue}>
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default InputPin
