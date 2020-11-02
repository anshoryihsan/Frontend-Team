import React, { useState, useEffect } from "react";
import { HistoryCard } from "../../../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getHistories } from "../../../redux/actions/user";
import InfiniteScroll from "react-infinite-scroller";

function History() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(0);

  const { token } = useSelector((state) => state.Auth);
  const { history, error } = useSelector((state) => state.User);
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
          <div className="font-weight-bold ">Notification</div>
        </div>
      </nav>
      <div className="rounded-14 my-2 mt-5">
        {loading ? <div className="small text-center py-4">loading ...</div> :
          error ? <div className="small text-center py-4">{error}</div> :
            !history.history.length ? <div className="small text-center py-4">Data is empty</div> :
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
                {history.history.map((item, index) => {
                  return (
                    <div key={index} className="my-3">
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
                  );
                })}
              </InfiniteScroll>
        }
      </div>
    </>
  );
}

export default History;
