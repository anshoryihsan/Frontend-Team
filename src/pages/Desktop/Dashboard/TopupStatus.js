import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { currency } from '../../../helpers'
import { getHistoryTopup } from '../../../redux/actions/user'


function TransferStatus() {
  const { token } = useSelector(state => state.Auth)
  const { historyId } = useSelector(state => state.User)

  const params = new URLSearchParams(window.location.search);
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getHistoryTopup(token, history, params.get("order_id")))
  }, [dispatch, history, token])

  const date = new Date(historyId?.created_at)
  const paydate = new Date(historyId?.paydate_at)

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex align-items-center flex-column my-3">
          <img
            src={window.location.origin + "/assets/images/icons/success-circle.svg"}
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
          <div className="font-weight-bold text-dark">Rp{currency(historyId?.amount_topup)}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Status</div>
          <div className="font-weight-bold text-dark">{historyId.status === 1 ? "Success" : "Pending"}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">{date.toDateString()} {date.toLocaleTimeString()}</div>
        </div>

        {
          historyId.paydate_at ?
            <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
              <div className="small">Date & Time Pay Transaction</div>
              <div className="font-weight-bold text-dark">{paydate.toDateString()} {paydate.toLocaleTimeString()}</div>
            </div> :
            null
        }

        <div className="d-flex justify-content-end mt-4">
          <button
            className="py-2 px-2 rounded-14 btn bg-grey mr-3"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <img
              src={window.location.origin + "/assets/images/icons/share-2.svg"}
              height="22px"
              width="22px"
              alt="share"
            />
          </button>

          <button
            className="py-2 px-lg-4 px-2 align-items-center rounded-14 btn bg-grey d-flex mr-3"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <img
              src={window.location.origin + "/assets/images/icons/download.svg"}
              height="22px"
              width="22px"
              alt="download"
            />

            <div className="text-primary ml-2">Download PDF</div>
          </button>

          <Link
            to="/dashboard"
            className="py-2 px-lg-4 px-2 rounded-14 btn btn-primary"
          >
            Back to Home
              </Link>
        </div>
      </div>
    </>
  )
}

export default TransferStatus
