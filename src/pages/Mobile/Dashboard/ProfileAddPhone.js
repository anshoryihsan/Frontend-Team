import React, { useState } from "react";
import { InputBorderedBottom } from "../../../components/Inputs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPhoneMobile } from "../../../redux/actions/user";
import { Link } from "react-router-dom";

function ProfileNewPhone() {
  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);
  const { token } = useSelector((state) => state.Auth);

  const _changePhone = (e) =>
    e.target.value === "" || e.target.value.match(/^\d+$/i)
      ? setPhone(e.target.value)
      : null;

  const dispatch = useDispatch();
  const history = useHistory();
  const _onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addPhoneMobile(token, phone, history));
  };

  console.log(history);

  return (
    <>
      <div className="bg-secondary mx-2">
        <div className="rounded-14 shadow-none">
          <nav className="py-3 d-flex justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <Link to="/m/dashboard/profile">
                <img
                  src="/assets/images/icons/arrow-left.svg"
                  height="24px"
                  width="24px"
                  alt="arrow"
                />
              </Link>
              <div className="font-weight-bold ml-3">Add Phone</div>
            </div>
          </nav>
        </div>

        <div className="text-center text-black-50">
          Add at least one phone number for the transfer ID so you can start
          transfering your money to another user.
        </div>
        <form onSubmit={_onSubmit} className="row">
          <div className="col-lg-11 m-auto">
            <div className="d-flex flex-column bd-highlight mb-2">
              <div className="p-2 bd-highlight">
                <div className="mt-3">
                  <InputBorderedBottom
                    style={{ backgroundColor: "black" }}
                    iconName="phone"
                    type={phone}
                    prefix="+62"
                    label="Enter your phone number"
                    onChange={_changePhone}
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
                    isFocused={phoneFocus}
                    value={phone} />
                </div>


                <div className="fixed-bottom ml-3" style={{
                  bottom: "15px",
                  width: "90%"
                }}>
                  <button
                    className="w-100 btn bg-primary py-3 mt-3 rounded-14 text-white" disabled={!phone}>
                    Submit
                </button>
                </div>


              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileNewPhone;
