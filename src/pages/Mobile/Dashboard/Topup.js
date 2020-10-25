import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopup } from "../../../redux/actions/user";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

function Topup() {
  const [loading, setLoading] = useState(false);
  const { topup } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getTopup());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className="bg-secondary">
        <div className="p-4 rounded-14 shadow-sm">
          <nav className="mx-2 py-3 px-2 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <Link to="/m/dashboard">
                <img
                  src="/assets/images/icons/arrow-left.svg"
                  height="24px"
                  width="24px"
                  alt="arrow"
                />
              </Link>
              <div className="font-weight-bold ml-3">Top Up</div>
            </div>
          </nav>

          <div className="d-flex bg-white align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4">
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
          </div>

          <div className="text-center small text-black-50">
            <p>
              We provide you virtual account number for top <br /> up via
              nearest ATM.
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="font-weight-bold">How To Top Up</div>
          </div>

          {loading ? (
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
          )}
        </div>
      </div>
    </>
  );
}

export default Topup;
