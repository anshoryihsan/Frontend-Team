import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PinInputBorder } from '../../../components/Inputs'
import { createPin } from '../../../redux/actions/user'


function Login() {
  const [pin, setPin] = useState('')

  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const { error, token } = useSelector(state => state.Auth)

  const _onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(createPin(token, pin, history, "/auth/success"))
    setLoading(false)
  }

  return (
    <>
      <h4 className="font-weight-bold">
        Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.
      </h4>

      <div className="text-black-50 my-4">
        Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="row mt-lg-5 mt-3 mb-3">
          <PinInputBorder className="col-2 px-lg-2 px-1 px-lg-0" length={6} onChange={value => setPin(value)} />
        </div>

        <button
          className="btn btn-primary w-100 py-3 rounded-14 d-block mt-4"
          disabled={loading}
        >
          Confirm
        </button>

        {error ? <div className="text-danger small text-center mt-3">{error}</div> : null}
      </form>
    </>
  )
}

export default Login