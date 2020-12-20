import React from "react";
import "./styles.css";
import { navbarItem } from "../../../helpers";
import { useLocation, Link } from "react-router-dom";
import Icons from "../../Icons";

function SideNavbar(props) {
  const { active, onClose, notifClick, data } = props;
  const { name, phone, photo } = data;

  const pathName = useLocation().pathname;

  return (
    <>
      <div className={`side-navbar d-lg-none p-4 ${active ? "active" : ""}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="font-weight-bold text-primary pb-0 mb-0">ZWallet</h4>

          <button type="button" className="btn p-0" onClick={onClose}>
            <img
              alt="x"
              src={
                window.location.origin + "/zwallet/assets/images/icons/x.svg"
              }
              height="28px"
              width="28px"
            />
          </button>
        </div>

        <div className="mt-4">
          <img
            alt="profile"
            src={
              photo
                ? photo
                : `${window.location.origin}/assets/images/icons/default.svg`
            }
            width="70px"
            height="70px"
          />

          <div className="d-flex align-items-center justify-content-between">
            <div className="mt-2">
              <div className="font-weight-bold text-dark">{name}</div>
              <span className="small text-black-50">
                {phone ? `+62 ${phone}` : "-"}
              </span>
            </div>

            <button className="btn" onClick={notifClick}>
              <img
                alt="notification"
                src={
                  window.location.origin +
                  "/zwallet/assets/images/icons/bell.svg"
                }
                height="24px"
                width="24px"
              />
            </button>
          </div>

          <hr className="my-3" />

          <ul className="p-0">
            {navbarItem.map((item, index) => {
              let routeActive = false;
              if (item.route === "/dashboard") {
                if (
                  pathName === "/dashboard" ||
                  pathName === "/dashboard/history"
                )
                  routeActive = true;
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
                    className={`${routeActive ? "text-primary" : "text-dark"}`}
                  >
                    <h6 className="ml-2 mb-0">{item.name}</h6>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`sidebar-overlay d-lg-none ${active ? "active" : ""}`}
        onClick={onClose}
      />
    </>
  );
}

export default SideNavbar;
