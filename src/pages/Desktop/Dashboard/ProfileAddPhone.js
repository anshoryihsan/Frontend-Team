import React, { useState } from 'react'
import { InputBorderedBottom } from '../../../components/Inputs'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addPhone } from '../../../redux/actions/user'


function ProfileNewPhone() {
  const [phone, setPhone] = useState('')
  const [phoneFocus, setPhoneFocus] = useState(false)
  const { token } = useSelector(state => state.Auth)

  const _changePhone = e =>
    e.target.value === '' || e.target.value.match(/^\d+$/i) ? setPhone(e.target.value) : null

  const dispatch = useDispatch()
  const history = useHistory()
  const _onSubmit = async (e) => {
    e.preventDefault()
    dispatch(addPhone(token, phone, history))
  }

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="font-weight-bold">Add Phone Number</div>
        <div className="w-50 d-none d-lg-block  text-black-50 my-3">
          Add at least one phone number for the transfer ID so you can start transfering your money to another user.
        </div>
        <div className="d-lg-none text-black-50 my-3">
          Add at least one phone number for the transfer ID so you can start transfering your money to another user.
        </div>

        <form onSubmit={_onSubmit} className="row">
          <div className="col-lg-6 m-auto">
            <div className="mt-3">
              <InputBorderedBottom
                iconName="phone"
                type={phone}
                prefix="+62"
                label="Enter your phone number"
                onChange={_changePhone}
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
                isFocused={phoneFocus}
                value={phone}
              />
            </div>

            <button
              className="w-100 btn btn-primary py-3 mt-3 rounded-14"
              disabled={!phone}
            >
              Add Phone Number
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProfileNewPhone
