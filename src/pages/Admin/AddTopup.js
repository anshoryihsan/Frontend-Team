import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getTopup, deleteTopup, addTopup} from '../../redux/actions/user';
import {InputBorderedBottom} from '../../components/Inputs';


function AddTopup() {
  const [detail, setDetail] = useState('');
  const [detailFocus, setDetailFocus] = useState(false);
  const {token} = useSelector((state) => state.Auth);

  const _addTopup = (e) => setDetail(e.target.value);

  const dispatch = useDispatch();
  const history = useHistory();

  const _onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTopup(token, detail, history));
  };

  return (
    <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
      <div className="d-flex justify-content-between align-items-center">
        <div className="font-weight-bold">Add Topup</div>
      </div>

      <form onSubmit={_onSubmit} className="row">
        <div className="col-lg-6 m-auto">
          <div className="mt-3">
            <InputBorderedBottom
              iconName="edit-admin"
              type={detail}
              label="Enter how to topup"
              onChange={_addTopup}
              onFocus={() => setDetailFocus(true)}
              onBlur={() => setDetailFocus(false)}
              isFocused={detailFocus}
              value={detail}
            />
          </div>
          <button
            className="w-100 btn btn-primary py-3 mt-3 rounded-14"
            disabled={!detail}
          >
            Add Topup
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTopup;
