import React from 'react'
import { Modal } from 'react-bootstrap'
function Responsive(props) {
  const { show, onDismiss, onContinue, device } = props
  return (
    <Modal
      show={show}
      keyboard={false}
      animation={false}
      centered
    >
      <Modal.Body className="p-lg-4">
        <div className="d-flex justify-content-between">
          <div className="font-weight-bold">Confirmation</div>
        </div>

        <div className="w-75 small mt-3">
          Do you wanna redirecting to {device} view?
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn p-0 text-danger shadow-none"
            onClick={onDismiss}
          >
            Cancel
          </button>

          <button
            className="btn text-primary py-2 px-4 shadow-none"
            onClick={onContinue}
          >
            Yes, Take me away
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Responsive
