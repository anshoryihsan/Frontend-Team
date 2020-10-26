import React from 'react'
import { Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Icons from '../../../components/Icons'
import { useSelector, useDispatch } from 'react-redux'
import { setPhoto } from '../../../redux/actions/user'

function Profile() {
  const { token } = useSelector(state => state.Auth)
  const { userdata } = useSelector(state => state.User)
  const dispatch = useDispatch()
  const history = useHistory()
  const _setPhoto = (e) => {
    const formData = new FormData()
    formData.append("photo", e.target.files[0])
    dispatch(setPhoto(token, formData))
  }

  return (
    <div className="bg-white fixed-top vh-100">
      <div className="mx-3 my-4 bg-white rounded-14 vh-85">
        <nav className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <button
              className="btn pr-4 p-0 shadow-none"
              onClick={() => history.goBack()}
            >
              <img
                src="/assets/images/icons/arrow-left.svg"
                height="24px"
                width="24px"
                alt="arrow"
              />
            </button>
          </div>
        </nav>

        <Row className="py-2">
          <div className="mx-auto col-lg-7 d-flex align-items-center flex-column">
            <img
              alt="profile"
              width="80px"
              height="80px"
              className="rounded-14 object-cover"
              src={userdata?.photo ? userdata.photo : "/assets/images/icons/default.svg"}
            />

            <label className="text-black-50 my-3 small d-flex" style={{ cursor: "pointer" }}>
              <Icons iconName="edit" iconWidth={14} iconHeight={14} />
              <div className="ml-2">Edit</div>
              <input type="file" className="d-none" onChange={_setPhoto} accept="image/*" />
            </label>

            <h5 className="font-weight-bold text-dark">{userdata.name}</h5>
            <div className="small text-black-50 text-center mb-3">{userdata.phone ? userdata.phone : "-"}</div>

            <Link className="d-block p-3 text-dark bg-grey w-100 rounded-14 mt-2" to="/m/dashboard/profile/info">
              <div className="d-flex justify-content-between">
                <div>Personal Information</div>
                <Icons iconName="arrow-right" iconWidth={24} iconHeight={24} />
              </div>
            </Link>

            <Link className="d-block p-3 text-dark bg-grey w-100 rounded-14 mt-2" to="/m/dashboard/profile/change_password">
              <div className="d-flex justify-content-between">
                <div>Change Password</div>
                <Icons iconName="arrow-right" iconWidth={24} iconHeight={24} />
              </div>
            </Link>

            <Link className="d-block p-3 text-dark bg-grey w-100 rounded-14 mt-2" to="/m/dashboard/profile/change_pin">
              <div className="d-flex justify-content-between">
                <div>Change PIN</div>
                <Icons iconName="arrow-right" iconWidth={24} iconHeight={24} />
              </div>
            </Link>

            <Link className="d-block p-3 text-dark bg-grey w-100 rounded-14 mt-2" to="/logout">
              Logout
              </Link>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Profile
