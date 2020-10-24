import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function index(props) {
  const { menuClick, notifClick, data } = props
  const { name, phone, photo } = data
  return (
    <nav className="bg-white py-4 shadow-sm">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/dashboard">
            <h4 className="font-weight-bold text-primary">ZWallet</h4>
          </Link>

          <button className="btn bg-primary py-2 px-2 d-lg-none" onClick={menuClick}>
            <img
              src={window.location.origin + "/assets/images/icons/more-vert.svg"}
              height="24px"
              width="24px"
              alt="More"
            />
          </button>

          <div className="d-none d-lg-flex align-items-center">
            <img
              alt="profile"
              src={photo ? photo : `${window.location.origin}/assets/images/profile-image.png`}
              width="52px"
              height="52px"
            />

            <div className="mx-3">
              <div className="font-weight-bold text-dark">{name}</div>
              <span className="small text-black-50">{phone ? `+62 ${phone}` : '-'}</span>
            </div>

            <button className="btn" onClick={notifClick}>
              <img
                alt="notification"
                src={window.location.origin + "/assets/images/icons/bell.svg"}
                height="24px"
                width="24px"
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default index
