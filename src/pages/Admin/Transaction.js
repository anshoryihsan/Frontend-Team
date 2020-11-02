import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { getTransaction } from "../../redux/actions/admin";
import moment from "moment"
import "moment/locale/id"
moment.locale("id")

function Users() {
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [offset, setOffset] = useState(2);
  const [isScrolling, setScrolling] = useState(false);

  const { token } = useSelector((state) => state.Auth);
  const { history } = useSelector((state) => state.Admin);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getTransaction(token, 1));
    setLoading(false);
  }, [dispatch, token]);

  const loadMore = () => {
    if (isScrolling) return false;
    setScrolling(true);
    setOffset(offset + 1);
    setTimeout(() => {
      dispatch(getTransaction(token, offset, false));
      setScrolling(false);
      if (history.length < (offset - 1) * 4) return setMore(false);
    }, 1500);
  };

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="font-weight-bold">List Users</div>
        </div>

        {loading ? <div className="small text-center py-4">loading ...</div> :
          !history.length ? <div className="small text-center py-4">History isn't available for now</div> :
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
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Transaction Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      history.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.type === "topup" ? item.amount_topup : item.amount}</td>
                            <td className="text-capitalize">{item.type === "topup" ? item.status === 1 ? "Success" : "Pending" : "Success"}</td>
                            <td>{moment(item.created_at).format("LLL")}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </InfiniteScroll>
        }
        {/* <Alert
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
                    <div className="col-lg-6" key={index}>
                      <ListUsers
                        src={item.photo}
                        name={item.name}
                        email={item.email}
                        phone={item.phone ? `+62 ${item.phone}` : "-"}
                        id={item.id}
                        to={`/admin/users/${item.id}/edit`}
                        className="my-2 mr-2 w-100 "
                      />
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            )} */}
      </div>
    </>
  );
}

export default Users;
