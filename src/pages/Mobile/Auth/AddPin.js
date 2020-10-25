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
    dispatch(createPin(token, pin, history, "/m/auth/success"))
    setLoading(false)
  }

  return (
    <div className="py-2 text-center">
      <h4 className="font-weight-bold">
        Create Security PIN
      </h4>

      <div className="text-black-50 my-4">
        Create a PIN that’s contain 6 digits number for security purpose in Zwallet.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="row h-100 mt-lg-5 mt-3 mb-5">
          <PinInputBorder className="col-2 px-lg-2 px-1 px-lg-0 mb-5" length={6} onChange={value => setPin(value)} />
        </div>

        <div className="bg-white" style={{ position: 'sticky', bottom: 15 }}>
          <button
            className="btn btn-primary w-100 py-3 rounded-8 d-block mt-3 bg-white"
            disabled={loading}
          >
            Confirm
        </button>
        </div>

        {error ? <div className="text-danger small text-center mt-3">{error}</div> : null}
      </form>
    </div>
  )
}

export default Login