import React, { useState, useEffect } from "react";
import { ReceiverCard } from "../../../components/Cards";
import { InputBordered } from "../../../components/Inputs";
import { useDispatch, useSelector } from "react-redux";
import { getFindUsers } from "../../../redux/actions/user";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";

function Transfer() {
  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(false);

  const { token } = useSelector((state) => state.Auth);
  const { findUser, error } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getFindUsers(token, 1, name));
    setLoading(false);
  }, [dispatch, name, token]);

  const loadMore = () => {
    if (isScrolling) return false;
    setScrolling(true);
    setOffset(offset + 1);
    setTimeout(() => {
      dispatch(getFindUsers(token, offset, name, false));
      setScrolling(false);
      if (findUser.length < (offset - 1) * 4) return setMore(false);
    }, 1500);
  };

  const _changeName = (e) => {
    setName(e.target.value);
    setOffset(2);
    setMore(true);
  };

  return (
    <div className="bg-secondary">
      
        <div className="d-flex justify-content-between align-items-center mt-4 ">
          <Link to="/m/dashboard">
            <img
              src={
                window.location.origin +
                "/assets/images/icons/arrow-left.svg"
              }
              height="24px"
              width="24px"
              alt="plus"
              className="mx-3"
            />
          </Link>

          <div className="font-weight-bold mr-auto">Find Receiver</div>
        </div>

        <div className="mt-4 mx-3">
          <InputBordered
            iconName="search"
            label="Search receiver here"
            onChange={_changeName}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            isFocused={nameFocus}
            value={name}
          />
        </div>
      
      <div className="p-4  rounded-14 shadow-sm vh-85">
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
            {findUser.map((item, index) => (
              <ReceiverCard
                key={index}
                src={item.photo}
                name={item.name}
                phone={item.phone ? `+62 ${item.phone}` : "-"}
                to={`/m/dashboard/transfer/${item.id}`}
                className="my-2"
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

export default Transfer;
