import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTopup, deleteTopup } from "../../redux/actions/user";
import Icons from "../../components/Icons";

function Main() {
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.Auth);
  const { topup } = useSelector((state) => state.User);
  const [_Id, _setId] = useState(0);

  const dispatch = useDispatch((state) => state.User);
  useEffect(() => {
    setLoading(true);
    dispatch(getTopup(token));
    setLoading(false);
  }, [dispatch, token]);
  const history = useHistory();
  const deleteRow = async (id) => {
    dispatch(deleteTopup(token, id, history));
  };

  return (
    <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
      <div className="d-flex justify-content-between align-items-center">
        <div className="font-weight-bold">How To Top Up</div>
      </div>
      {loading ? (
        <div className="text-center small py-4">Loading ...</div>
      ) : (
        topup.map((item, index) => (
          <div className="shadow-sm justify-content-between align-items-center d-flex rounded-14 p-3 my-4">
            <div
              key={index}
              className="d-flex align-items-center justify-content-between"
            >
              <div className="font-weight-bold text-primary align-self-start">
                {index + 1}
              </div>
              <div className="small col">{item.detail}</div>
            </div>

            <button className="btn" onClick={() => deleteRow(item.id)}>
              <Icons iconName="trash-red" iconWidth={24} iconHeight={24} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Main;
