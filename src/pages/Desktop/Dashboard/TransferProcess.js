import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ReceiverCard } from '../../../components/Cards'
import { InputBorderless, InputBorderedBottom } from '../../../components/Inputs'
import { useHistory, useParams } from 'react-router-dom'
import { currency } from '../../../helpers'
import { useSelector, useDispatch } from 'react-redux'
import { getFindId } from '../../../redux/actions/user'

function TransferProcess() {
  const [amount, setAmount] = useState('')
  const [amountFocus, setAmountFocus] = useState(false)
  const [note, setNote] = useState('')
  const [noteFocus, setNoteFocus] = useState(false)

  const history = useHistory()
  const { id } = useParams()
  const { token } = useSelector(state => state.Auth)
  const { userdata, findId } = useSelector(state => state.User)

  const dispatch = useDispatch()

  const _changeAmount = e => {
    setAmount(e.target.value.replace(/[^0-9]/g, ''))
    e.target.value = "Rp" + currency(e.target.value.replace(/[^0-9]/g, ''))
  }

  useEffect(() => {
    dispatch(getFindId(token, id))
  }, [token, id, dispatch])

  return (
    <>
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

        <div className="w-50 d-none d-lg-block mt-4">
          Type the amount you want to transfer and then press continue to
          the next steps.
        </div>

        <div className="d-lg-none mt-4">
          Type the amount you want to transfer and then press continue to
          the next steps.
        </div>

        <div className="mt-4">
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
        </div>

        <div className="text-center font-weight-bold mt-3 mb-5">
          Rp{currency(parseInt(userdata.balance))} Available
        </div>

        <div className="d-flex justify-content-center">
          <div className="w-50">
            <InputBorderedBottom
              iconName="edit"
              label="Add some notes"
              onChange={e => setNote(e.target.value)}
              onFocus={() => setNoteFocus(true)}
              onBlur={() => setNoteFocus(false)}
              isFocused={noteFocus}
              value={note}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <Button
            onClick={() => history.push(`/dashboard/transfer/${id}/confirm?amount=${amount}&note=${note}`)}
            color="primary"
            className="py-2 px-4"
            disabled={userdata.balance === 0 || userdata.balance < amount || amount === '' || note === ''}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  )
}

export default TransferProcess
