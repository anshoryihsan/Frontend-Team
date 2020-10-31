import React, { useState, useEffect } from "react";
import { ListUsers } from "../../components/Cards";
import { InputBordered } from "../../components/Inputs";
import { Alert } from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getFindUsers } from "../../redux/actions/user";
import InfiniteScroll from "react-infinite-scroller";
import { AlertDimiss } from "../../redux/actions/admin";
import {Link} from "react-router-dom"

function Users() {
  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(false);
  const [isShow, setShow] = useState(true);

  const { token } = useSelector((state) => state.Auth);
  const { findUser, error } = useSelector((state) => state.User);
  const { message } = useSelector((state) => state.Admin.updateUser);
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

  const _handleShow = () => {
    setShow(!isShow);
    dispatch(AlertDimiss())
  }

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="font-weight-bold">List Users</div>
          <Link to="/admin/users/add">
          <div className="d-flex align-items-center bg-primary rounded-sm p-1 px-3 mr-2 text-white">
            <img
              src={
                window.location.origin + "/assets/images/icons/plus-white.svg"
              }
              height="24px"
              width="24px"
              alt="arrow"
              className="mx-1"
            />
            Add User
          </div>
          </Link>
        </div>
        <Alert 
          type="alert-success"
          show={isShow}
          message={message}
          onDimiss={_handleShow}
        />

        <div className="mt-4">
          <InputBordered
            iconName="search"
            label="Search Users ..."
            onChange={_changeName}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            isFocused={nameFocus}
            value={name}
          />
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
            <div className="row">
              {findUser.map((item, index) => (
                <div className="col-6" key={index}>
                  <ListUsers
                    src={item.photo}
                    name={item.name}
                    email={item.email}
                    phone={item.phone ? `+62 ${item.phone}` : "-"}
                    id = {item.id}
                    to={`/admin/users/${item.id}/edit`}
                    className="my-2 mr-2 w-100 "
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

export default Users;
