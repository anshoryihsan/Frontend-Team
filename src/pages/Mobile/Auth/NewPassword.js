import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputBorderedBottom } from "../../../components/Inputs";
// import { changePassword } from "../../../redux/actions/user";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  //   const { error, token } = useSelector((state) => state.Auth);

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

  //   const { token } = useSelector((state) => state.Auth);
  const { error } = useSelector((state) => state.User);
  //   const dispatch = useDispatch();

  const _onSubmit = async () => {
    // const data = { password, passwordNew };
    // dispatch(changePassword(token, data, history));
    history.push("/m/auth");
  };

  return (
    <div className="py-2 text-center">
      <h4 className="font-weight-bold">Reset Password</h4>

      <div className="text-black-50 my-4">
        Create and confirm your new password so you can login to Zwallet.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="row h-100 mt-lg-5 mt-3 mb-5">
          <div className="mt-4 w-100">
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
          </div>
        </div>

        <div className="bg-white" style={{ position: "sticky", bottom: 15 }}>
          <button
            type="submit"
            className="btn btn-primary w-100 py-3 rounded-8 d-block mt-3 bg-white"
            disabled={loading}
          >
            Reset Password
          </button>
        </div>

        {error ? (
          <div className="text-danger small text-center mt-3">{error}</div>
        ) : null}
      </form>
    </div>
  );
}

export default ForgotPassword;
