import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { SideNavbarAdmin, TopNavbar } from "../../components/Navigations";
import { Notification } from "./components";
import { navbarAdmin } from "../../helpers";
import Footer from "../../components/Footer";
import Icons from "../../components/Icons";
import "./styles.css";

import { UserLoad } from "../../redux/actions/user";

function Dashboard({ child: Child }) {
  const [menu, setMenu] = useState(false);
  const [notif, setNotif] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathName = useLocation().pathname;
  const history = useHistory();
  const { token } = useSelector((state) => state.Auth);
  const { userdata } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const _setMenu = () => {
    setMenu(!menu);
    setNotif(false);
  };
  const _setNotif = () => {
    setMenu(false);
    setNotif(!notif);
  };

  useEffect(() => {
    if (userdata.role !== "admin") history.replace("/dashboard");
    setLoading(true);
    dispatch(UserLoad(token, history, false));
    setLoading(false);
  }, [dispatch, history, token]);

  return (
    <div className="bg-secondary">
      <div
        className={`loading ${
          loading ? "active" : null
        } bg-secondary d-flex justify-content-center align-items-center`}
      >
        <h1>Loading ...</h1>
      </div>

      <TopNavbar
        data={userdata}
        menuClick={() => _setMenu()}
        notifClick={() => _setNotif()}
      />

      <SideNavbarAdmin
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
              {navbarAdmin
                .slice(0, navbarAdmin.length - 1)
                .map((item, index) => {
                  let routeActive = false;
                  if (item.route === "/admin") {
                    if (pathName === "/admin") routeActive = true;
                  } else {
                    routeActive = pathName.match(item.route);
                  }

                  return (
                    <li
                      key={index}
                      className={`d-flex align-items-center my-4 ${
                        routeActive ? "active" : ""
                      }`}
                    >
                      <Icons
                        iconName={item.icon}
                        isActive={routeActive}
                        iconHeight={24}
                        iconWidth={24}
                      />

                      <Link
                        to={item.route}
                        className={`${
                          routeActive ? "text-primary" : "text-dark"
                        }`}
                      >
                        <h6 className="ml-2 mb-0">{item.name}</h6>
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <ul>
              <li className="d-flex align-items-center my-4">
                <img
                  alt="logout"
                  src={
                    window.location.origin +
                    "/zwallet/assets/images/icons/log-out.svg"
                  }
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
  );
}

export default Dashboard;
