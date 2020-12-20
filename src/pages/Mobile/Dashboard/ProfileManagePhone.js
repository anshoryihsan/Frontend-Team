import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Icons from "../../../components/Icons";
import { deletePhone } from "../../../redux/actions/user";

function ProfileManagePhone() {
  const { token } = useSelector((state) => state.Auth);
  const { userdata } = useSelector((state) => state.User);
  const history = useHistory();
  const dispatch = useDispatch();
  const _onDelete = async () => {
    dispatch(deletePhone(token, history, true));
  };
  return (
    <>
      <nav className="py-2 mb-3 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button
            className="btn pr-4 p-0 shadow-none"
            onClick={() => history.goBack()}
          >
            <img
              src="/zwallet/assets/images/icons/arrow-left.svg"
              height="24px"
              width="24px"
              alt="arrow"
            />
          </button>

          <div className="font-weight-bold">Change PIN</div>
        </div>
      </nav>

      <div className="rounded-14">
        <div className="font-weight-bold">Personal Information</div>
        <div className="w-50 d-none d-lg-block  text-black-50 my-3">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </div>
        <div className="d-lg-none text-black-50 my-3">
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </div>
        <div className="shadow-sm bg-white justify-content-between align-items-center d-flex rounded-14 p-3 my-4">
          <div>
            <div className="small">Phone Number</div>
            <div className="font-weight-bold text-dark">
              {userdata.phone ? `+62 ${userdata.phone}` : "-"}
            </div>
          </div>

          <button className="btn" onClick={_onDelete}>
            <Icons iconName="trash" iconWidth={24} iconHeight={24} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileManagePhone;
