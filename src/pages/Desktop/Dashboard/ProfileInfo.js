import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProfileInfo() {
  const { userdata } = useSelector(state => state.User)
  const { name, email, phone } = userdata

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="font-weight-bold">Personal Information</div>
        <div className="w-50 d-none d-lg-block  text-black-50 my-3">
          We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
          </div>
        <div className="d-lg-none text-black-50 my-3">
          We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
        </div>

        {name ? name.match(" ") ? (
          <>
            <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
              <div className="small">First Name</div>
              <div className="font-weight-bold text-dark">{name ? name.split(" ").slice(0, name.split(" ").length - 1) : null}</div>
            </div>

            <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
              <div className="small">Last Name</div>
              <div className="font-weight-bold text-dark">{name ? name.split(" ")[name.split(" ").length - 1] : null}</div>
            </div>
          </>
        ) : (
            <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
              <div className="small">Name</div>
              <div className="font-weight-bold text-dark">{name ? name : null}</div>
            </div>
          ) : null
        }

        <div className="shadow-sm rounded-14 pl-3 my-4 py-3">
          <div className="small">Verified E-mail</div>
          <div className="font-weight-bold text-dark">{email}</div>
        </div>

        <div className="shadow-sm justify-content-between align-items-center d-flex rounded-14 p-3 my-4">
          <div>
            <div className="small">Phone Number</div>
            <div className="font-weight-bold text-dark">{phone ? `+62 ${phone}` : "-"}</div>
          </div>

          <Link to={phone ? `/dashboard/profile/manage_phone` : `/dashboard/profile/add_phone`}>Manage</Link>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
