import React, { useState } from "react";
import { InputBorderedBottom } from "../../../components/Inputs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { changePassword } from "../../../redux/actions/user";

function ProfileChangePass() {
  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const _changePassword = (e) => setPassword(e.target.value);

  const [passwordNew, setPasswordNew] = useState("");
  const [passwordNewFocus, setPasswordNewFocus] = useState(false);
  const [visiblePasswordNew, setVisiblePasswordNew] = useState(false);

  const _changePasswordNew = (e) => setPasswordNew(e.target.value);

  const [passwordNewConfirm, setPasswordNewConfirm] = useState("");
  const [passwordNewConfirmFocus, setPasswordNewConfirmFocus] = useState(false);
  const [visiblePasswordNewConfirm, setVisiblePasswordNewConfirm] = useState(
    false
  );

  const _changePasswordNewConfirm = (e) =>
    setPasswordNewConfirm(e.target.value);

  const { token } = useSelector((state) => state.Auth);
  const { error } = useSelector((state) => state.User);
  const history = useHistory();
  const dispatch = useDispatch();

  const _onSubmit = async () => {
    const data = { password, passwordNew };
    dispatch(changePassword(token, data, history));
  };

  return (
    <>
      <div className="bg-secondary">
        <div className="p-4 rounded-14 shadow-sm vh-100">
          <nav className="mx-2 py-3 px-2 d-flex justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <Link to="/m/dashboard">
                <img
                  src="/assets/images/icons/arrow-left.svg"
                  height="24px"
                  width="24px"
                  alt="arrow"
                />
              </Link>
              <div className="font-weight-bold ml-3">Change Password</div>
            </div>
          </nav>

          {/* <div className="d-flex bg-white align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4">
            <div className="small col">
              <Row>
                <Col xs={3}>
                  <div className="bg-secondary shadow-sm rounded-14 px-2 py-2">
                    <img
                      src="/assets/images/icons/plus-active.svg"
                      height="30px"
                      width="30px"
                      alt="arrow"
                    />
                  </div>
                </Col>
                <Col>
                  <div className="text-black-50">Virtual Account Number</div>
                  <div className="font-weight-bold">111111111111111111111</div>
                </Col>
              </Row>
            </div>
          </div> */}

          <div className="small text-black-50">
            <p>
              You must enter your current password and then type your new
              password twice
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="mt-4">
                <InputBorderedBottom
                  iconName="lock-50"
                  type={visiblePassword ? "text" : "password"}
                  label="Current Password"
                  onChange={_changePassword}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  iconRight
                  iconRightName="eye-crossed"
                  iconRightClick={() => setVisiblePassword(!visiblePassword)}
                  iconRightActive={visiblePassword}
                  isFocused={passwordFocus}
                  value={password}
                />
              </div>

              <div className="mt-4">
                <InputBorderedBottom
                  iconName="lock-50"
                  type={visiblePasswordNew ? "text" : "password"}
                  label="New Password"
                  onChange={_changePasswordNew}
                  onFocus={() => setPasswordNewFocus(true)}
                  onBlur={() => setPasswordNewFocus(false)}
                  iconRight
                  iconRightName="eye-crossed"
                  iconRightClick={() =>
                    setVisiblePasswordNew(!visiblePasswordNew)
                  }
                  iconRightActive={visiblePasswordNew}
                  isFocused={passwordNewFocus}
                  value={passwordNew}
                />
              </div>

              <div className="mt-4">
                <InputBorderedBottom
                  iconName="lock-50"
                  type={visiblePasswordNewConfirm ? "text" : "password"}
                  label="Confirm New Password"
                  onChange={_changePasswordNewConfirm}
                  onFocus={() => setPasswordNewConfirmFocus(true)}
                  onBlur={() => setPasswordNewConfirmFocus(false)}
                  iconRight
                  iconRightName="eye-crossed"
                  iconRightClick={() =>
                    setVisiblePasswordNewConfirm(!visiblePasswordNewConfirm)
                  }
                  iconRightActive={visiblePasswordNewConfirm}
                  isFocused={passwordNewConfirmFocus}
                  value={passwordNewConfirm}
                />
              </div>

              {error ? (
                <div className="my-2 small text-danger">{error}</div>
              ) : null}

              <div className="ppsition-absolute fixed-bottom mb-4 p-3">
                <button
                  className="w-100 btn btn-primary py-3 rounded-14"
                  onClick={_onSubmit}
                  disabled={
                    !password ||
                    !passwordNew ||
                    passwordNew !== passwordNewConfirm
                  }
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* <div className="d-flex justify-content-between align-items-center">
            <div className="font-weight-bold">How To Top Up</div>
          </div> */}

          {/* {loading ? (
            <div className="text-center small py-4">Loading ...</div>
          ) : (
            topup.map((item, index) => (
              <div
                key={index}
                className="d-flex bg-white align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4"
              >
                <div className="font-weight-bold text-primary align-self-start">
                  {index + 1}
                </div>
                <div className="small col">{item.detail}</div>
              </div>
            ))
          )} */}
        </div>
      </div>
      {/* <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePassword ? "text" : "password"}
                label="Current Password"
                onChange={_changePassword}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                iconRight
                iconRightName="eye-crossed"
                iconRightClick={() => setVisiblePassword(!visiblePassword)}
                iconRightActive={visiblePassword}
                isFocused={passwordFocus}
                value={password}
              />
            </div>

            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePasswordNew ? "text" : "password"}
                label="New Password"
                onChange={_changePasswordNew}
                onFocus={() => setPasswordNewFocus(true)}
                onBlur={() => setPasswordNewFocus(false)}
                iconRight
                iconRightName="eye-crossed"
                iconRightClick={() =>
                  setVisiblePasswordNew(!visiblePasswordNew)
                }
                iconRightActive={visiblePasswordNew}
                isFocused={passwordNewFocus}
                value={passwordNew}
              />
            </div>

            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePasswordNewConfirm ? "text" : "password"}
                label="Confirm New Password"
                onChange={_changePasswordNewConfirm}
                onFocus={() => setPasswordNewConfirmFocus(true)}
                onBlur={() => setPasswordNewConfirmFocus(false)}
                iconRight
                iconRightName="eye-crossed"
                iconRightClick={() =>
                  setVisiblePasswordNewConfirm(!visiblePasswordNewConfirm)
                }
                iconRightActive={visiblePasswordNewConfirm}
                isFocused={passwordNewConfirmFocus}
                value={passwordNewConfirm}
              />
            </div>

            {error ? (
              <div className="my-2 small text-danger">{error}</div>
            ) : null}

            <button
              className="w-100 btn btn-primary py-3 mt-3 rounded-14"
              onClick={_onSubmit}
              disabled={
                !password || !passwordNew || passwordNew !== passwordNewConfirm
              }
            >
              Change Password
            </button>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default ProfileChangePass;
