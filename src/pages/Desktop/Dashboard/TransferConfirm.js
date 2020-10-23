import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ReceiverCard } from '../../../components/Cards'
import { ModalInputPin } from '../../../components/Modal'
import { useHistory, useParams } from 'react-router-dom'
import { currency } from '../../../helpers'
import { useSelector, useDispatch } from 'react-redux'
import { balanceTransfer, getFindId } from '../../../redux/actions/user'


function Transfer() {
  const [isShow, setShow] = useState(false)
  const [pin, setPin] = useState("")

  const _handleShow = () => setShow(!isShow)

  const history = useHistory()
  const { token } = useSelector(state => state.Auth)
  const { userdata, findId, error } = useSelector(state => state.User)
  const { id } = useParams()

  const params = new URLSearchParams(window.location.search);
  const amount = params.get("amount")
  const note = params.get("note")
  const date = new Date().toISOString().split('T')[0]

  const dispatch = useDispatch()

  useEffect(() => {
    if (userdata.balance === 0 || userdata.balance < amount) history.push("/dashboard")

    dispatch(getFindId(token, id))
  }, [userdata.balance, amount, history, id, token, dispatch])

  const _onContinue = async () => {
    const data = { id, note, pin, total: amount }
    dispatch(balanceTransfer(token, data, history))
  }


  return (
    <>
      <ModalInputPin
        show={isShow}
        onDismiss={_handleShow}
        onChange={value => setPin(value)}
        onContinue={_onContinue}
        error={error}
      />

      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Transfer Money</div>
        </div>

        <ReceiverCard
          disabled
          src={findId.photo}
          name={findId.name}
          phone={findId.phone ? `+62 ${findId.phone}` : "-"}
          className="my-2 shadow-none"
        />

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Amount</div>
          <div className="font-weight-bold text-dark">Rp{currency(amount)}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Balance Left</div>
          <div className="font-weight-bold text-dark">Rp{currency(parseInt(userdata.balance) - parseInt(amount))}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Date & Time</div>
          <div className="font-weight-bold text-dark">{date}</div>
        </div>

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Notes</div>
          <div className="font-weight-bold text-dark">
            {note}
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <Button color="primary" onClick={_handleShow} className="py-2 px-4">Continue</Button>
        </div>
      </div>
    </>
  )
}

export default Transfer
