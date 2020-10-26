import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const history = useHistory();
  const { userdata } = useSelector((state) => state.User);
  const { name, email, phone } = userdata;
  return (
    <div className="bg-secondary vh-100  vh-85">
      <nav className="py-2 d-flex justify-content-between">
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
          <div className="font-weight-bold ">Confirmation</div>
        </div>
      </nav>
      <div className="d-sm text-black-50 my-2 mx-2">
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </div>
      {name ? (
        name.match(" ") ? (
          <>
            <div className="shadow-sm bg-white rounded-14 pl-3 my-4 py-3 mx-2">
              <div className="small">First Name</div>
              <div className="font-weight-bold text-dark">
                {name
                  ? name.split(" ").slice(0, name.split(" ").length - 1)
                  : null}
              </div>
            </div>

            <div className="shadow-sm bg-white rounded-14 pl-3 my-4 py-3 mx-2">
              <div className="small">Last Name</div>
              <div className="font-weight-bold text-dark">
                {name ? name.split(" ")[name.split(" ").length - 1] : null}
              </div>
            </div>
          </>
        ) : (
            <div className="shadow-sm bg-white rounded-14 pl-3 my-4 py-3 mx-2">
              <div className="small">Name</div>
              <div className="font-weight-bold text-dark">
                {name ? name : null}
              </div>
            </div>
          )
      ) : null}

      <div className="shadow-sm bg-white rounded-14 pl-3 my-4 py-3 mx-2">
        <div className="small">Verified E-mail</div>
        <div className="font-weight-bold text-dark">{email}</div>
      </div>
      <div className="shadow-sm bg-white justify-content-between mx-2 align-items-center d-flex rounded-14 p-3 my-4">
        <div>
          <div className="small">Phone Number</div>
          <div className="font-weight-bold text-dark">
            {phone ? `+62 ${phone}` : "-"}
          </div>
        </div>

        <Link
          to={
            phone
              ? `/dashboard/profile/manage_phone`
              : `/dashboard/profile/add_phone`
          }
        >
          Manage
        </Link>
      </div>
    </div>
  );
}

export default ProfileInfo;
