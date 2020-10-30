import React, { useState, useEffect } from "react"
import { useMedia } from "use-media"
import { Link, useLocation, useHistory } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { SideNavbar, TopNavbar } from "../../components/Navigations"
import { Notification } from "./components"
import { navbarItem } from "../../helpers"
import { ModalResponsive } from '../../components/Modal'
import Footer from "../../components/Footer"
import Icons from "../../components/Icons"
import "./styles.css"

import { UserLoad } from '../../redux/actions/user'

function Dashboard({ child: Child }) {
  const mobileView = useMedia({ maxWidth: "500px" })

  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)
  const [notif, setNotif] = useState(false)
  const [loading, setLoading] = useState(false)

  const pathName = useLocation().pathname
  const history = useHistory()
  const { token } = useSelector(state => state.Auth)
  const { userdata } = useSelector(state => state.User)
  const dispatch = useDispatch()

  const _setMenu = () => {
    setMenu(!menu)
    setNotif(false)
  }
  const _setNotif = () => {
    setMenu(false)
    setNotif(!notif)
  }

  useEffect(() => {
    if (window.innerWidth <= 500) return history.replace("/m/dashboard")
    setLoading(true)
    dispatch(UserLoad(token, history, false))
    setLoading(false)
  }, [dispatch, history, token])


  useEffect(() => {
    if (!modal) setModal(mobileView)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileView])

  return (
    <div className="bg-secondary">
      <ModalResponsive
        show={modal}
        onDismiss={() => setModal(false)}
        onContinue={() => history.replace("/m/dashboard")}
      />

      <div className={`loading ${loading ? 'active' : null} bg-secondary d-flex justify-content-center align-items-center`}>
        <h1>Loading ...</h1>
      </div>

      <TopNavbar data={userdata} menuClick={() => _setMenu()} notifClick={() => _setNotif()} />

      <SideNavbar
        active={menu}
        data={userdata}
        onClose={() => _setMenu()}
        notifClick={() => _setNotif()}
      />

      <Notification active={notif} onClose={() => _setNotif()} />

      <Container className="py-5">
        <Row>
          <div className="col-3 d-lg-flex d-none side-nav-left bg-white flex-column justify-content-between shadow-sm py-4 rounded-14">
            <ul>
              {navbarItem.slice(0, navbarItem.length - 1).map((item, index) => {
                let routeActive = false
                if (item.route === "/dashboard") {
                  if (
                    pathName === "/dashboard" ||
                    pathName === "/dashboard/history"
                  )
                    routeActive = true
                } else {
                  routeActive = pathName.match(item.route)
                }

                return (
                  <li
                    key={index}
                    className={`d-flex align-items-center my-4 ${routeActive ? "active" : ""}`}
                  >
                    <Icons
                      iconName={item.icon}
                      isActive={routeActive}
                      iconHeight={24}
                      iconWidth={24}
                    />

                    <Link
                      to={item.route}
                      className={`${routeActive ? "text-primary" : "text-dark"
                        }`}
                    >
                      <h6 className="ml-2 mb-0">{item.name}</h6>
                    </Link>
                  </li>
                )
              })}
              {
                userdata.role !== "admin" ? null :
                  <li className="d-flex align-items-center my-4">
                    <Icons
                      iconName="user"
                      iconHeight={24}
                      iconWidth={24}
                    />

                    <Link
                      to="/admin"
                    >
                      <h6 className="ml-2 mb-0 text-dark">Admin Panel</h6>
                    </Link>
                  </li>
              }
            </ul>

            <ul>
              <li className="d-flex align-items-center my-4">
                <img
                  alt="logout"
                  src={window.location.origin + "/assets/images/icons/log-out.svg"}
                  height="24px"
                  width="24px"
                />
                <Link to="/logout" className="text-dark">
                  <h6 className="ml-2 mb-0">Keluar</h6>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-9 col-12 pl-3">
            <Child />
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default Dashboard
