import React, { useState, useEffect } from "react";
import { HistoryCard } from "../../../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getHistories } from "../../../redux/actions/user";
import InfiniteScroll from "react-infinite-scroller";

function Transaction() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(0);

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

  const loadMore = () => {
    if (isScrolling) return false;
    if (history.length < (offset - 1) * 4) return setMore(false);
    setScrolling(true);
    setOffset(offset + 1);
    setTimeout(() => {
      dispatch(getHistories(token, offset, false));
      setScrolling(false);
      console.log(history.length, offset - 4);
    }, 1500);
  };
  return (
    <>
      <nav className="py-2 d-flex justify-content-between">
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
      <div className="bg-primary side-nav-right p-4 shadow-sm rounded-14 mx-2 mt-4">
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

      <div className="p-2 rounded-14 my-2 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">In This Week</div>
        </div>
      </div>
      <div className="mt-4 d-flex flex-column align-items-center">
        <div className="bg-white shadow-sm rounded-14 px-4 py-2 text-success font-weight-bold">
          +Rp65.000
        </div>
        {/* <canvas height="268px" id="canvas" className="w-100"></canvas> */}
      </div>

      <div className="p-2 rounded-14 my-2 mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">Transaction History</div>
        </div>
        {loading ? (
          <div className="small text-center py-4">loading ...</div>
        ) : error ? (
          <div className="small text-center py-4">{error}</div>
        ) : (
          <InfiniteScroll
            initialLoad={false}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={
              <div className="small text-center py-4" key={0}>
                Loading ...
              </div>
            }
          >
            {history.map((item, index) => {
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
            })}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

export default Transaction;
