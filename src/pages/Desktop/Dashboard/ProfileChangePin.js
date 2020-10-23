import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { PinInputBorder } from '../../../components/Inputs'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPin } from '../../../redux/actions/user'


function ProfileNewPhone() {
  const [pin, setPin] = useState('')
  const { token } = useSelector(state => state.Auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const _onSubmit = () => {
    dispatch(createPin(token, pin, history))
  }
  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="font-weight-bold">Change PIN</div>
        <div className="w-50 d-none d-lg-block  text-black-50 my-3">
          Type your new 6 digits security PIN to use in Zwallet.
        </div>
        <div className="d-lg-none text-black-50 my-3">
          Type your new 6 digits security PIN to use in Zwallet.
        </div>

        <div className="row">
          <div className="col-lg-6 m-auto">
            <Row className="mt-lg-5 mt-3 mb-3">
              <PinInputBorder className="col-2 px-lg-2 px-1 px-lg-0" length={6} onChange={value => setPin(value)} />
            </Row>
            <button
              className="w-100 btn btn-primary py-3 mt-3 rounded-14"
              onClick={_onSubmit}
              disabled={pin.length !== 6}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileNewPhone
