import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputBorderedBottom } from "../../../components/Inputs";
// import { useDispatch, useSelector } from "react-redux";
// import { AuthLogin } from "../../../redux/actions/auth";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
  
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    //  const dispatch = useDispatch();
    //  const { error, token } = useSelector((state) => state.Auth);
  
    const _changeEmail = (e) => setEmail(e.target.value);
    const _onSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      // dispatch aing comment sesuai descript di trello 
      // minta gausah sambungin backend, disini cuma cek email ada di db gak, kalo ada reset password nya, 
      // disini push ke path di line 25
      // dispatch(createPin(token, pin, history, "/m/auth/success"));
      setLoading(false);
      history.push("/auth/reset-password/new-password");
    };
  return (
    <>
      <h4 className="font-weight-bold">
        Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
        In a Minutes.
      </h4>

      <div className="text-black-50 my-4">
        To reset your password, you must type your e-mail and we will send a
        link to your email and you will be directed to the reset password
        screens.
      </div>

      <form onSubmit={_onSubmit}>
        <div className="mt-4">
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

        <button
          className="btn btn-primary w-100 py-2 rounded-8 d-block mt-4"
          disabled={loading || email === ""}
        >
          Confirm
        </button>
      </form>
    </>
  );
}

export default ForgotPassword;
