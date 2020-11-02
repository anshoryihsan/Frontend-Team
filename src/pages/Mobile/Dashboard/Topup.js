import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { getTopup, getPaymentToken, processPayment } from '../../../redux/actions/user'
import TopupModal from '../../../components/Modal/Topup'

function Topup() {
  const [loading, setLoading] = useState(false);
  const [modalTopup, setModalTopup] = useState(false)

  const history = useHistory()
  const { topup } = useSelector((state) => state.User);
  const { token } = useSelector(state => state.Auth)

  const dispatch = useDispatch()
  useEffect(() => {
    const midtransSnap = document.createElement("script");
    midtransSnap.setAttribute(
      "src",
      "https://app.sandbox.midtrans.com/snap/snap.js"
    );
    midtransSnap.setAttribute(
      "data-client-key",
      "SB-Mid-client-So_VRfD27r9md9vU"
    );
    document.head.appendChild(midtransSnap);
    setLoading(true);
    dispatch(getTopup(token));
    setLoading(false);
  }, [dispatch]);

  const _onTopup = async (val) => {
    setModalTopup(false)
    getPaymentToken(token, val)
      .then(tokenPay => {
        window.snap.pay(tokenPay, {
          onPending: function (result) {
            processPayment(token, result)
              .then(id => history.push(`/m/dashboard/topup/status?order_id=${id}`))
          }
        })
      })
  }
  return (
    <>
      <TopupModal
        onDismiss={() => setModalTopup(false)}
        onContinue={_onTopup}
        show={modalTopup}
      />
      <div className="bg-secondary">
        <div className="rounded-14 mx-2 ">
          <nav className=" d-flex justify-content-between">
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

          <div className="d-flex bg-white align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4" >
            <div className="small col">
              <Row className="align-items-center">
                <button onClick={() => setModalTopup(true)} className="btn p-0 shadow-none">
                  <div className="bg-secondary shadow-sm rounded-14 px-2 py-2">
                    <img
                      src="/assets/images/icons/plus-active.svg"
                      height="30px"
                      width="30px"
                      alt="arrow"
                    />
                  </div>
                </button>
                <Col>
                  <div className="text-black-50">Virtual Account Number</div>
                  <div className="font-weight-bold">1231 1231 1231 1231</div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="text-center small text-black-50">
            <p>We provide you virtual account number for top <br /> up via nearest ATM.</p>
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
