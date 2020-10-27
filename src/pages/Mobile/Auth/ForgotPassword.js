import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { InputBorderedBottom } from '../../../components/Inputs'
// import { createPin } from "../../../redux/actions/user";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [loading, setLoading] = useState(false);
  const history = useHistory();
//   const dispatch = useDispatch();
  //   const { error, token } = useSelector((state) => state.Auth);

  const _changeEmail = (e) => setEmail(e.target.value);
  const _onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch aing comment sesuai descript di trello 
    // minta gausah sambungin backend, disini cuma cek email ada di db gak, kalo ada reset password nya, 
    // disini push ke path di line 25
    // dispatch(createPin(token, pin, history, "/m/auth/success"));
    setLoading(false);
    history.push("/m/auth/reset-password/new-password");
  };

  return (
    <div className="py-2 text-center">
      <h4 className="font-weight-bold">Reset Password</h4>

      <div className="text-black-50 my-4">
        Enter your Zwallet e-mail so we can send you a password reset link.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="row h-100 mt-lg-5 mt-3 mb-5">
          <div className="mt-4 w-100">
            <InputBorderedBottom
              iconName="mail"
              label="Enter your e-mail"
              onChange={_changeEmail}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              isFocused={emailFocus}
              value={email}
            />
          </div>
        </div>

        <div className="bg-white" style={{ position: "sticky", bottom: 15 }}>
          <button
            className="btn btn-primary w-100 py-3 rounded-8 d-block mt-3 bg-white"
            disabled={loading}
          >
            Confirm
          </button>
        </div>

        {/* {error ? (
          <div className="text-danger small text-center mt-3">{error}</div>
        ) : null} */}
      </form>
    </div>
  );
}

export default ForgotPassword;
