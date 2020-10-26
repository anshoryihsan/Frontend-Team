import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { PinInputBorder } from '../../../components/Inputs'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { balanceTransfer } from "../../../redux/actions/user";

function ProfileNewPhone() {
  const [pin, setPin] = useState('')
  const { token } = useSelector(state => state.Auth)
  const { error } = useSelector(state => state.User)
  const dispatch = useDispatch()
  const history = useHistory()

  const { id } = useParams();

  const params = new URLSearchParams(window.location.search);
  const amount = params.get("amount");
  const note = params.get("note");

  const _onSubmit = () => {
    const data = { id, note, pin, total: amount };
    dispatch(balanceTransfer(token, data, history, true));
  }

  return (
    <div className="bg-secondary">
      <div className="d-flex justify-content-between align-items-center py-2">
        <button className="btn shadow-none p-0 pr-3" onClick={() => history.goBack()} >
          <img
            src={
              window.location.origin +
              "/assets/images/icons/arrow-left.svg"
            }
            height="24px"
            width="24px"
            alt="plus"
            className="mr-3"
          />
        </button>

        <div className="font-weight-bold mr-auto">Enter Your PIN</div>
      </div>
      <div className="p-3 ">
        <div className=" text-black-50 my-3">
          Enter your 6 digits PIN for confirmation to continue transferring money.
        </div>

        <div className="row">
          <div className="col-lg-6 m-auto">
            <Row className="mt-lg-5 mt-3 mb-3">
              <PinInputBorder className="col-2 px-lg-2 px-1 px-lg-0" length={6} onChange={value => setPin(value)} />
            </Row>
            {error ? <div className="text-danger small text-center mt-3">{error}</div> : null}
            <button
              className={`w-100 btn  py-3 mt-3 rounded-14 ${pin.length !== 6 ? "bg-gray" : "btn-primary"}`}
              onClick={_onSubmit}
              disabled={pin.length !== 6}
            >
              Transfer Now
            </button>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileNewPhone
