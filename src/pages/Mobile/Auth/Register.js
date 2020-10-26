import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputBorderedBottom } from '../../../components/Inputs'
import { AuthRegister } from '../../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameFocus, setNameFocus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)

  const _changeName = e => setName(e.target.value)
  const _changeEmail = e => setEmail(e.target.value)
  const _changePassword = e => setPassword(e.target.value)

  const { error } = useSelector(state => state.Auth)
  const dispatch = useDispatch()
  const history = useHistory()

  const _onSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, password }
    dispatch(AuthRegister(data, history, true))
  }

  return (
    <div className="text-center py-2">
      <h4 className="font-weight-bold">
        Sign Up
      </h4>

      <div className="text-black-50 my-3">
        Create your account to access Zwallet.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="mt-3">
          <InputBorderedBottom
            iconName="user-50"
            label="Enter your fullname"
            onChange={_changeName}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            isFocused={nameFocus}
            value={name}
          />
        </div>

        <div className="mt-3">
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

        <div className="mt-3">
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


        <button
          className="btn btn-primary w-100 py-3 rounded-14 d-block mt-4"
          disabled={name === '' || email === '' || password === ''}
        >
          Login
        </button>
      </form>

      {error ? <div className="text-danger small text-center mt-3">{error}</div> : null}

      <div className="my-3 text-center">
        Already have an account? Let’s <Link to="/m/auth">Sign In</Link>
      </div>
    </div>
  )
}

export default Register