import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { PinInputBorder } from "../../../components/Inputs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPin } from "../../../redux/actions/user";

function ProfileNewPhone() {
  const [pin, setPin] = useState("");
  const { token } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const _onSubmit = () => {
    dispatch(createPin(token, pin, history));
  };

  // useEffect(() => {
  //   // if (userdata.balance === 0 || userdata.balance < amount) history.push("/dashboard")

  //   dispatch(getFindId(token, id))
  // }, [])

  return (
    <>
      <>
        <div className="bg-secondary">
          <nav className="py-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <button
                className="btn pr-4 p-0 shadow-none"
                onClick={() => history.goBack()}
              >
                <img
                  src="/assets/images/icons/arrow-left.svg"
                  height="24px"
                  width="24px"
                  alt="arrow"
                />
              </button>

              <div className="font-weight-bold">Change PIN</div>
            </div>
          </nav>

          <div className="rounded-14 shadow-none mx-2 my-3">

            <div className="small text-black-50">
              <p>Type your new 6 digits security PIN to use in Zwallet.</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <Row className="mt-lg-5 mb-3 no-gutters">
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
