import React, { useState } from 'react'
import { InputBorderedBottom } from '../../../components/Inputs'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changePassword } from '../../../redux/actions/user'


function ProfileChangePass() {
  const [password, setPassword] = useState('')
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)

  const _changePassword = e => setPassword(e.target.value)

  const [passwordNew, setPasswordNew] = useState('')
  const [passwordNewFocus, setPasswordNewFocus] = useState(false)
  const [visiblePasswordNew, setVisiblePasswordNew] = useState(false)

  const _changePasswordNew = e => setPasswordNew(e.target.value)

  const [passwordNewConfirm, setPasswordNewConfirm] = useState('')
  const [passwordNewConfirmFocus, setPasswordNewConfirmFocus] = useState(false)
  const [visiblePasswordNewConfirm, setVisiblePasswordNewConfirm] = useState(false)

  const _changePasswordNewConfirm = e => setPasswordNewConfirm(e.target.value)

  const { token } = useSelector(state => state.Auth)
  const { error } = useSelector(state => state.User)
  const history = useHistory()
  const dispatch = useDispatch()



  const _onSubmit = async () => {
    const data = { password, passwordNew }
    dispatch(changePassword(token, data, history))
  }

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="font-weight-bold">Manage Phone Number</div>
        <div className="w-50 d-none d-lg-block  text-black-50 my-3">
          You can only delete the phone number and then you must add another phone number.
        </div>
        <div className="d-lg-none text-black-50 my-3">
          You can only delete the phone number and then you must add another phone number.
        </div>

        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePassword ? 'text' : 'password'}
                label="Current Password"
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

            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePasswordNew ? 'text' : 'password'}
                label="New Password"
                onChange={_changePasswordNew}
                onFocus={() => setPasswordNewFocus(true)}
                onBlur={() => setPasswordNewFocus(false)}
                iconRight
                iconRightName="eye-crossed"
                iconRightClick={() => setVisiblePasswordNew(!visiblePasswordNew)}
                iconRightActive={visiblePasswordNew}
                isFocused={passwordNewFocus}
                value={passwordNew}
              />
            </div>

            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePasswordNewConfirm ? 'text' : 'password'}
                label="Confirm New Password"
                onChange={_changePasswordNewConfirm}
                onFocus={() => setPasswordNewConfirmFocus(true)}
                onBlur={() => setPasswordNewConfirmFocus(false)}
                iconRight
                iconRightName="eye-crossed"
                iconRightClick={() => setVisiblePasswordNewConfirm(!visiblePasswordNewConfirm)}
                iconRightActive={visiblePasswordNewConfirm}
                isFocused={passwordNewConfirmFocus}
                value={passwordNewConfirm}
              />
            </div>

            {error ? <div className="my-2 small text-danger">{error}</div> : null}

            <button
              className="w-100 btn btn-primary py-3 mt-3 rounded-14"
              onClick={_onSubmit}
              disabled={!password || !passwordNew || (passwordNew !== passwordNewConfirm)}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileChangePass
