import React, { useEffect } from 'react'
import { ReceiverCard } from '../../../components/Cards'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { currency } from '../../../helpers'
import { getHistoryId } from '../../../redux/actions/user'


function TransferStatus() {
  const { id } = useParams()
  const { token } = useSelector(state => state.Auth)
  const { historyId, userdata } = useSelector(state => state.User)

  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getHistoryId(token, id, history))
  }, [dispatch, history, id, token])

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
          <div className="font-weight-bold mt-3">Transfer Success</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Amount</div>
          <div className="font-weight-bold text-dark">Rp{currency(parseInt(historyId.total))}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Balance Left</div>
          <div className="font-weight-bold text-dark">Rp{currency(parseInt(userdata.balance))}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">{historyId.created_at?.split("T")[0]}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Notes</div>
          <div className="font-weight-bold text-dark">
            {historyId.note}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Transfer to</div>
        </div>

        <ReceiverCard
          disabled
          name={historyId.name}
          phone={historyId.phone ? historyId.phone : "-"}
          src={historyId.photo}
          className="my-2 shadow-none"
        />

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

          <a
            href="/dashboard.html"
            className="py-2 px-lg-4 px-2 rounded-14 btn btn-primary"
          >
            Back to Home
              </a>
        </div>
      </div>
    </>
  )
}

export default TransferStatus
