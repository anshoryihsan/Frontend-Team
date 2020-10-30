import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReceiverCard } from "../../components/Cards";
import { InputBorderedBottom } from "../../components/Inputs";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFindId, updateUser } from "../../redux/actions/admin";

function EditUser() {
  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneFocus, setPhoneFocus] = useState(false);

  const history = useHistory();
  const { id } = useParams();
  const { token } = useSelector((state) => state.Auth);
  const { userdata, findId } = useSelector((state) => state.User);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFindId(token, id));
  }, [token, id, dispatch]);

  useEffect(() => {
    setName(findId.name);
    setEmail(findId.email);
    setPhone(findId.phone);
  }, []);

  const _onSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone };
    dispatch(updateUser(token, id, data, history));
  };
  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Edit User</div>
        </div>

        <ReceiverCard
          disabled
          src={findId.photo}
          name={findId.name}
          phone={findId.phone ? `+62 ${findId.phone}` : "-"}
          className="my-2 shadow-sm rounded-0"
        />

        <div className="d-flex justify-content-center mt-3">
          <form onSubmit={_onSubmit} className="w-50">
            <InputBorderedBottom
              iconName="user"
              label="Enter your fullname"
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              isFocused={nameFocus}
              value={name ? name : ""}
            />
            <InputBorderedBottom
              iconName="mail"
              label="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              isFocused={emailFocus}
              value={email ? email : ""}
            />
            <InputBorderedBottom
              iconName="phone"
              label="Enter your phone"
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(false)}
              isFocused={phoneFocus}
              value={phone ? phone : ""}
            />

            <Button
              type="submit"
              color="primary"
              className="py-2 px-4 mt-4 w-100"
              disabled={name === "" || email === "" || phone === ""}
            >
              Submit Changes
            </Button>
          </form>
        </div>

        <div className="d-flex justify-content-end mt-4"></div>
      </div>
    </>
  );
}

export default EditUser;
