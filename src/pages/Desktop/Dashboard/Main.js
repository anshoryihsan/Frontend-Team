import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HistoryCard } from '../../../components/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { currency } from '../../../helpers'
import { getHistories, getPaymentToken, processPayment } from '../../../redux/actions/user'
import BarChart from '../../../components/Charts/BarChart'
import Topup from '../../../components/Modal/Topup'

function Main() {
  const [loading, setLoading] = useState(true)
  const [modalTopup, setModalTopup] = useState(false)

  const history1 = useHistory()
  const { token } = useSelector(state => state.Auth)
  const { userdata, history, error } = useSelector(state => state.User)
  const { balance, phone } = userdata

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
    setLoading(true)
    dispatch(getHistories(token))
    setLoading(false)
  }, [dispatch, token])

  const _onTopup = async (val) => {
    setModalTopup(false)
    getPaymentToken(token, val)
      .then(tokenPay => {
        window.snap.pay(tokenPay, {
          onPending: function (result) {
            processPayment(token, result)
              .then(id => history1.push(`/dashboard/topup/status?order_id=${id}`))
          }
        })
      })
  }

  return (
    <div className={`vh-85 ${loading ? 'd-none' : null}`}>
      <Topup
        onDismiss={() => setModalTopup(false)}
        onContinue={_onTopup}
        show={modalTopup}
      />

      <div className="bg-primary side-nav-right p-4 shadow-sm rounded-14">
        <div className="d-md-flex justify-content-between">
          <div>
            <div className="text-white">Balance</div>
            <h2 className="my-3 text-white font-weight-bold">Rp {currency(balance)}</h2>
            <div className="small text-white">{phone ? `+62 ${phone}` : '-'}</div>
          </div>

          <div
            className="d-flex justify-content-between mt-4 mt-md-0 d-md-block"
          >
            <Link
              to="/dashboard/transfer"
              className="btn bg-white-outline py-3 mb-md-2 text-white d-flex overlay-1"
            >
              <img
                src={window.location.origin + "/assets/images/icons/arrow-up-white.svg"}
                height="24px"
                width="24px"
                alt="arrow"
              />
              <div className="font-weight-bold">Transfer</div>
            </Link>

            <button
              className="btn bg-white-outline py-3 mb-md-2 px-3 text-white d-flex overlay-1"
              onClick={() => setModalTopup(true)}
            >
              <img
                src={window.location.origin + "/assets/images/icons/plus-white.svg"}
                height="24px"
                width="24px"
                alt="plus"
              />
              <div className="font-weight-bold">Top Up</div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="row no-gutters">
          <div className="col-lg-7 col-12 pr-lg-3">
            <div className="p-4 bg-white shadow-sm rounded-14">
              <div className="row">
                <div className="col-6">
                  <img
                    src={window.location.origin + "/assets/images/icons/arrow-up-green.svg"}
                    height="24px"
                    width="24px"
                    alt="arrow"
                  />

                  <div className="small my-1">Income</div>

                  <div className="font-weight-bold">Rp{currency(history?.income)}</div>
                </div>

                <div className="col-6">
                  <img
                    src={window.location.origin + "/assets/images/icons/arrow-up-red.svg"}
                    height="24px"
                    width="24px"
                    alt="arrow"
                  />

                  <div className="small my-1">Expense</div>

                  <div className="font-weight-bold">Rp{currency(history?.expense)}</div>
                </div>
              </div>

              <div className="mt-4 d-flex flex-column align-items-center">
                <div
                  className="bg-white shadow-sm rounded-14 px-4 py-2 text-success font-weight-bold"
                >
                  +Rp65.000
                </div>
                <BarChart />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 pt-3 pt-lg-0">
            <div className="p-3 bg-white rounded-14 shadow-sm">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <div className="font-weight-bold">Transaction History</div>

                <Link to="/dashboard/history" className="small">See all</Link>
              </div>

              {
                loading ? <div className="small text-center py-4">Loading ...</div> :
                  error ? <div className="small text-center py-4">{error}</div> :
                    !history.history.length ? <div className="small text-center py-4">You don't have any transactions</div> :
                      history.history.map((item, index) => {
                        return (
                          <HistoryCard
                            id={item.type === "topup" ? item.order_id : item.id}
                            src={item.photo}
                            key={index}
                            name={item.name}
                            type={item.type}
                            amount={item.type === "transfer" ? item.amount : item.amount_topup}
                            isIncome={item.is_income}
                            status={item.status}
                            flat
                          />
                        )
                      })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
