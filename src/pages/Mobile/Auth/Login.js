import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { InputBorderedBottom } from '../../../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogin } from '../../../redux/actions/auth'


function Login() {
  const [email, setEmail] = useState('apirahman55@gmail.com')
  const [password, setPassword] = useState('123123')
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)

  const [loading, setLoading] = useState(false)

  const _changeEmail = e => setEmail(e.target.value)
  const _changePassword = e => setPassword(e.target.value)

  const history = useHistory()
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.Auth)

  const _onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(AuthLogin({ email, password }, history))
    setLoading(false)
  }

  return (
    <div className="py-2 text-center">
      <h4 className="font-weight-bold">
        Login
      </h4>

      <div className="text-black-50 my-4">
        Login to your existing account to access
        all the features in Zwallet.
      </div>

      <form onSubmit={_onSubmit}>

        <div className="mt-4">
          <InputBorderedBottom
            iconName="mail"
            label="Enter your e-mail"
            onChange={_changeEmail}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            isFocused={emailFocus}
            value={email}
          />
        </div>

        <div className="mt-4">
          <InputBorderedBottom
            iconName="lock-50"
            type={visiblePassword ? 'text' : 'password'}
            label="Enter your password"
            onChange={_changePassword}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            iconRight
            iconRightName="eye-crossed"
            iconRightClick={() => setVisiblePassword(!visiblePassword)}
            iconRightActive={visiblePassword}
            isFocused={passwordFocus}
            value={password}
          />
        </div>

        <div className="d-flex justify-content-end small">
          <Link to="/m/auth/reset-password" className="text-black-50">Forgot Password?</Link>
        </div>

        <button
          className="btn btn-primary w-100 py-3 rounded-14 d-block mt-4"
          disabled={loading || (email === '' || password === '')}
        >
          Login
        </button>

        {error ? <div className="text-danger small text-center mt-3">{error}</div> : null}
      </form>

      <div className="my-3 text-center">
        Don’t have an account? Let’s <Link to="/m/auth/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login