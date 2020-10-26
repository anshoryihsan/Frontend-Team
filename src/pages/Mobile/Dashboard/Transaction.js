import React, { useState, useEffect } from "react";
import { HistoryCard } from "../../../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getHistories } from "../../../redux/actions/user";
import BarChart from '../../../components/Charts/BarChart'

function Transaction() {
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.Auth);
  const { userdata, history, error } = useSelector((state) => state.User);
  const { email } = userdata;
  const back = useHistory();

  console.log(back, "sdasdashdjahsd");

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getHistories(token, 1));
    setLoading(false);
  }, [dispatch, token]);

  return (
    <>
      <nav className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button
            className="btn pr-4 p-0 shadow-none"
            onClick={() => back.goBack()}
          >
            <img
              src="/assets/images/icons/arrow-left.svg"
              height="24px"
              width="24px"
              alt="arrow"
            />
          </button>
          <div className="font-weight-bold ">Transaction</div>
        </div>
      </nav>

      <div className="bg-primary side-nav-right p-4 shadow-sm rounded-14 my-3">
        <div className="d-md-flex justify-content-between">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  window.location.origin +
                  "/assets/images/icons/arrow-up-green.svg"
                }
                height="24px"
                width="24px"
                alt="arrow"
              />

              <div className="small text-white my-1">Income</div>

              <div className="font-weight-bold text-white">Rp2.120.000</div>
            </div>

            <div className="col-6">
              <img
                src={
                  window.location.origin +
                  "/assets/images/icons/arrow-up-red.svg"
                }
                height="24px"
                width="24px"
                alt="arrow"
              />

              <div className="small text-white my-1">Expense</div>

              <div className="font-weight-bold text-white">Rp1.560.000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-14 mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">In This Week</div>
        </div>
      </div>
      <div className="mt-4 d-flex flex-column align-items-center">
        <div className="bg-white shadow-sm rounded-14 px-4 py-2 text-success font-weight-bold">
          +Rp65.000
        </div>
        <BarChart />
      </div>

      <div className="rounded-14 my-2 mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">Transaction History</div>
          <Link to="/m/dashboard/history" className="text-primary small">See All</Link>
        </div>
        {loading ? (
          <div className="small text-center py-4">loading ...</div>
        ) : error ? (
          <div className="small text-center py-4">{error}</div>
        ) : !history.length ? <div className="small text-center py-4">Data is empty</div> :
              history.map((item, index) => {
                return (
                  <div key={index} className="my-3">
                    <HistoryCard
                      name={item.from_name}
                      type="transfer"
                      amount={item.total}
                      isIncome={email !== item.from_email}
                    />
                  </div>
                );
              })
        }
      </div>
    </>
  );
}

export default Transaction;
