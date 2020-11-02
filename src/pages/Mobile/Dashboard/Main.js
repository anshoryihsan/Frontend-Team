import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HistoryCard } from '../../../components/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { currency } from '../../../helpers'
import { getHistories } from '../../../redux/actions/user'

function Main() {
  const { token } = useSelector(state => state.Auth)
  const { userdata, history, error } = useSelector(state => state.User)
  const { name, balance, phone, photo } = userdata

  const history1 = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistories(token))
  }, [dispatch, history1, token])

  return (
    <div className="bg-secondary vh-100">
      <nav className="d-flex justify-content-between">
        <Link to="/m/dashboard/profile" className="d-flex align-items-center">
          <img
            alt="profile"
            className="rounded-14 object-cover"
            src={photo ? photo : "/assets/images/icons/default.svg"}
            width="52px"
            height="52px"
          />

          <div className="pl-3  text-dark">
            <div className="font-weight-light">Hello,</div>
            <div className="font-weight-bold">{name}</div>
          </div>
        </Link>

        <Link to="/m/dashboard/notification" className="btn">
          <img
            alt="notification"
            src={window.location.origin + "/assets/images/icons/bell.svg"}
            height="24px"
            width="24px"
          />
        </Link>
      </nav>

      <div className="bg-primary side-nav-right p-4 shadow-sm rounded-14 my-3">
        <div className="d-md-flex justify-content-between">
          <div>
            <div className="text-white">Balance</div>
            <h2 className="my-3 text-white font-weight-bold">Rp {currency(parseInt(balance))}</h2>
            <div className="text-white">{phone ? `+62 ${phone}` : '-'}</div>
          </div>
        </div>
      </div>

      <div className="row no-gutters">
        <div className="col-6 pr-2">
          <Link to="/m/dashboard/transfer"
            className="btn d-flex rounded-14 justify-content-center bg-gray py-3 mb-md-2 px-3 text-white d-flex overlay-1 w-100"
          >
            <img
              src={window.location.origin + "/assets/images/icons/arrow-up-active.svg"}
              height="24px"
              width="24px"
              alt="plus"
            />
            <div className="font-weight-bold ml-3 text-dark">Transfer</div>
          </Link>
        </div>

        <div className="col-6 pl-2">
          <button
            onClick={() => history1.push("/m/dashboard/topup")}
            className="btn rounded-14 bg-gray d-flex justify-content-center py-3 mb-md-2 px-3 text-white d-flex overlay-1 w-100"
          >
            <img
              src={window.location.origin + "/assets/images/icons/plus-active.svg"}
              height="24px"
              width="24px"
              alt="plus"
            />
            <div className="font-weight-bold ml-3 text-dark">Top Up</div>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between my-4 mx-2">
        <div className="font-weight-bold">Transaction History</div>
        <Link to="/m/dashboard/transaction" className="text-primary small">See All</Link>
      </div>

      {
        error ? <div className="small text-center py-4">{error}</div> :
          !history.history.length ? <div className="small text-center py-4">Data is empty</div> :
            history.history.map((item, index) => {
              return (
                <div className="my-3" key={index}>
                  <HistoryCard
                    id={item.type === "topup" ? item.order_id : item.id}
                    src={item.photo}
                    name={item.name}
                    type={item.type}
                    amount={item.type === "transfer" ? item.amount : item.amount_topup}
                    isIncome={item.is_income}
                    status={item.status}
                    mobile
                  />
                </div>
              )
            })
      }
    </div>
  )
}

export default Main
