import React, { useState, useEffect } from "react";
import { HistoryCard } from "../../../components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getHistories } from "../../../redux/actions/user";
import InfiniteScroll from "react-infinite-scroller";
import { DatePick } from "../../../components/Modal/DatePicker";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

function History() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(0);
  const [filter, setFilter] = useState("");
  const [modalDate, setModalDate] = useState(false);
  const [date_start, setDateStart] = useState("");
  const [date_end, setDateEnd] = useState("");

  const { token } = useSelector((state) => state.Auth);
  const { history, error } = useSelector((state) => state.User);
  const back = useHistory();

  console.log(back, "sdasdashdjahsd");

  const dispatch = useDispatch();

  useEffect(() => {
    const param = {
      filter,
      date_start: moment(date_start).format("YYYY-MM-DD"),
      date_end: moment(date_end).format("YYYY-MM-DD"),
    };
    setLoading(true);
    setScrolling(true);
    setOffset(2);
    dispatch(getHistories(token, 1, true, param));
    setScrolling(false);
    setMore(true);
    setLoading(false);
  }, [dispatch, token, filter, date_start, date_end]);

  const loadMore = () => {
    if (history.history.length < (offset - 1) * 4) return setMore(false);
    if (isScrolling) return false;
    setScrolling(true);
    setOffset(offset + 1);
    setTimeout(() => {
      const param = {
        filter: filter,
        date_start: date_start,
        date_end: date_end,
      };
      dispatch(getHistories(token, offset, false, param));
    }, 500);
  };

  const sorting = (val) => {
    if (filter === val) return setFilter("");
    setFilter(val);
  };

  const handleDatePick = () => {
    setModalDate(false);
    setFilter("date");
  };

  return (
    <>
      <DatePick
        show={modalDate}
        onDismiss={() => setModalDate(false)}
        dateFrom={(val) => setDateStart(val)}
        dateTo={(val) => setDateEnd(val)}
        onContinue={handleDatePick}
        from={date_start}
        to={date_end}
      />

      <nav className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button
            className="btn pr-4 p-0 shadow-none"
            onClick={() => back.goBack()}
          >
            <img
              src="/zwallet/assets/images/icons/arrow-left.svg"
              height="24px"
              width="24px"
              alt="arrow"
            />
          </button>
          <div className="font-weight-bold ">History</div>
        </div>
      </nav>
      <div className="rounded-14 my-2 mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold small">Transaction History</div>
        </div>

        {loading ? (
          <div className="small text-center py-4">loading ...</div>
        ) : error ? (
          <div className="small text-center py-4">{error}</div>
        ) : !history.history.length ? (
          <div className="small text-center py-4">Data is empty</div>
        ) : (
          <InfiniteScroll
            initialLoad={false}
            loadMore={loadMore}
            hasMore={history.history.length === 5 ? hasMore : false}
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
                    amount={
                      item.type === "transfer" ? item.amount : item.amount_topup
                    }
                    isIncome={item.is_income}
                    status={item.status}
                    mobile
                  />
                </div>
              );
            })}
          </InfiniteScroll>
        )}
      </div>

      <div className="d-flex" style={{ position: "sticky", bottom: 15 }}>
        <button
          onClick={() => sorting("income")}
          className={`btn p-3 mx-1 shadow-lg border bg-white rounded-14 ${
            filter === "income" ? "btn-primary" : null
          }`}
        >
          <img
            src="/zwallet/assets/images/icons/arrow-up-green.svg"
            height="24px"
            width="24px"
            alt="arrow"
          />
        </button>

        <button
          onClick={() => sorting("expense")}
          className={`btn p-3 mx-1 shadow-lg border bg-white rounded-14 ${
            filter === "expense" ? "btn-primary" : null
          }`}
        >
          <img
            src="/zwallet/assets/images/icons/arrow-up-red.svg"
            height="24px"
            width="24px"
            alt="arrow"
          />
        </button>

        <button
          onClick={() =>
            filter !== "date" ? setModalDate(true) : setFilter("")
          }
          className={`btn p-3 mx-1 shadow-lg border bg-white rounded-14 w-100 text-primary font-weight-bold ${
            filter === "date" ? "btn-primary text-white" : null
          }`}
        >
          Filter by Date
        </button>
      </div>
    </>
  );
}

export default History;
