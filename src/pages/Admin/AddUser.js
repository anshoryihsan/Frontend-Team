//Add User

import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { InputBorderedBottom } from "../../components/Inputs";
import { UserAdd } from "../../redux/actions/admin";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const _changeName = (e) => setName(e.target.value);
  const _changeEmail = (e) => setEmail(e.target.value);
  const _changePassword = (e) => setPassword(e.target.value);

  const { error } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const { token } = useSelector(state => state.Auth)

  const _onSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(UserAdd(data, token));
  };

  

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <Row
          className="justify-content-md-center"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <form onSubmit={_onSubmit}>
            <div className="mt-3">
              <InputBorderedBottom
                iconName="user-50"
                label="Enter your fullname"
                onChange={_changeName}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                isFocused={nameFocus}
                value={name}
              />
            </div>

            <div className="mt-3">
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

            <div className="mt-3">
              <InputBorderedBottom
                iconName="lock-50"
                type={visiblePassword ? "text" : "password"}
                label="Enter your password"
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

            {error ? (
              <div className="text-danger small text-center mt-3">{error}</div>
            ) : null}

            <button
              className="btn btn-primary w-100 py-3 rounded-14 d-block mt-4"
              disabled={name === "" || email === "" || password === ""}
            >
              Add User
            </button>
          </form>
        </Row>
      </div>
    </>
  );
}

export default AddUser;
