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
    <div className="bg-secondary vh-100 p-4">
        <div className="d-flex align-items-center flex-column my-3 mt-3">
          <img
            src={window.location.origin + "/assets/images/icons/success-circle.svg"}
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
          <div className="font-weight-bold text-dark">Rp{currency(parseInt(historyId.total))}</div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Balance Left</div>
          <div className="font-weight-bold text-dark">Rp{currency(parseInt(userdata.balance))}</div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">{new Date(historyId.created_at).toUTCString().split("T")[0]}</div>
        </div>

        <div className="bg-white shadow-sm rounded-14 pl-3 my-4 py-3">
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
          className="my-2 shadow-sm bg-white"
        />

        <div className="d-flex justify-content-center mt-5">
          <a
            href="/dashboard.html"
            className="py-2 lg-6 px-5 rounded-14 btn btn-primary" width="200px"
          >
            Back to Home
              </a>
        </div>
      </div>
    </>
  )
}

export default TransferStatus
