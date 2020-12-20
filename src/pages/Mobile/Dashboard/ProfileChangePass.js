import React, { useState } from "react";
import { InputBorderedBottom } from "../../../components/Inputs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
        <nav className="py-2 d-flex justify-content-between">
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

            <div className="font-weight-bold">Change Password</div>
          </div>
        </nav>
        <div className="rounded-14 shadow-none mx-2 my-3">
          <div className="small text-black-50">
            <p>
              You must enter your current password and then type your new
              password twice
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div>
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

              <div className="fixed-bottom mb-4 p-3">
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
        </div>
      </div>
    </>
  );
}

export default ProfileChangePass;
