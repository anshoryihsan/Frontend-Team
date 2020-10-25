import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { PinInputBorder } from "../../../components/Inputs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { createPin } from "../../../redux/actions/user";

function ProfileNewPhone() {
  const [pin, setPin] = useState("");
  const { token } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const _onSubmit = () => {
    dispatch(createPin(token, pin, history));
  };

  useEffect(() => {
    // if (userdata.balance === 0 || userdata.balance < amount) history.push("/dashboard")

    dispatch(getFindId(token, id))
  }, [userdata.balance, amount, history, id, token, dispatch])

  return (
    <>
      <>
        <div className="bg-secondary">
          <div className="p-4 rounded-14 shadow-sm vh-100">
            <nav className="mx-2 py-3 px-2 d-flex justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <Link to="/m/dashboard/profile">
                  <img
                    src="/assets/images/icons/arrow-left.svg"
                    height="24px"
                    width="24px"
                    alt="arrow"
                  />
                </Link>
                <div className="font-weight-bold ml-3">Change PIN</div>
              </div>
            </nav>

            <div className="small text-black-50">
              <p>Type your new 6 digits security PIN to use in Zwallet.</p>
            </div>

            <div className="row">
              <div className="col-lg-6 m-auto">
                <Row className="mt-lg-5 mt-3 mb-3">
                  <PinInputBorder
                    className="col-2 px-lg-2 px-1 px-lg-0"
                    length={6}
                    onChange={(value) => setPin(value)}
                  />
                </Row>
                <div className='fixed-bottom mb-4 p-3'>
                  <button
                    className="w-100 btn btn-primary py-3 mt-3 rounded-14"
                    onClick={_onSubmit}
                    disabled={pin.length !== 6}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ProfileNewPhone;
