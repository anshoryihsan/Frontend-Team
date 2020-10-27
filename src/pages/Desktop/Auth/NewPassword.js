import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputBorderedBottom } from "../../../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
// import { AuthLogin } from "../../../redux/actions/auth";

function NewPassword() {
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
    history.push("/auth");
  };
  return (
    <>
      <h4 className="font-weight-bold">
        Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
        In a Minutes.
      </h4>

      <div className="text-black-50 my-4">
        Now you can create a new password for your Zwallet account. Type your
        password twice so we can confirm your new passsword.
      </div>

      <form onSubmit={_onSubmit}>
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
            iconRightClick={() => setVisiblePasswordNew(!visiblePasswordNew)}
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

        <button
          className="btn btn-primary w-100 py-2 rounded-8 d-block mt-4"
          disabled={loading}
        >
          Reset Password
        </button>
        {error ? (
          <div className="text-danger small text-center mt-3">{error}</div>
        ) : null}
      </form>
    </>
  );
}

export default NewPassword;
