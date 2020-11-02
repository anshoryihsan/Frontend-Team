import axios from "../../helpers/axios";
import { options, SETADMINERROR, SETFINDIDDATA, UPDATEUSER, SETALERTDIMISS, SETUSERADMIN, SETUSERADMINERROR, ADDADMINTRANSACTION, SETADMINTRANSACTION, } from "../constant";

const handleError = (err, dispatch) => {
  if (!err.response) return dispatch(options(SETADMINERROR, "Network Error"));
  dispatch(options(SETADMINERROR, err.response.data.message));
};

export const AlertDimiss = () => (dispatch) => {
  return dispatch(options(SETALERTDIMISS))
}

export const getFindId = (token, id) => dispatch => {
  dispatch(options(SETADMINERROR, ""))

  axios.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => dispatch(options(SETFINDIDDATA, res.data.data)))
    .catch(err => handleError(err, dispatch))
}

export const updateUser = (token, id, data, history) => dispatch => {
  dispatch(options(SETADMINERROR, ""))

  axios.patch(`/admin/user/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(options(UPDATEUSER, res.data))
      history.replace(`/admin/users`)
    })
    .catch(err => {
      handleError(err, dispatch)
    })
}

export const UserAdd = (data, token) => (dispatch) => {
  dispatch(options(SETADMINERROR, ""))

  axios.post("/admin/user", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(options(SETUSERADMIN, res.data))
      alert('Add Data Success')
      window.location.reload();
    })
    .catch(err => {
      handleError(err, dispatch)
      alert('Add Data Failed')
      window.location.reload();
    })
}

export const deleteUser = (token, id, history) => (dispatch) => {
  axios.delete(`/admin/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      alert('Delete Success')
      history.replace("/admin")
    })
    .catch(err => {
      handleError(err, dispatch)
      alert('Delete Failed')
      console.log(err.message)
      // window .location.reload();
    })
}

export const getTransaction = (token, offset = 1, reset = true) => (
  dispatch
) => {
  axios.get(`/admin/history?&offset=${offset}&limit=6`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (reset) return dispatch(options(SETADMINTRANSACTION, res.data.data));
      return dispatch(options(ADDADMINTRANSACTION, res.data.data));
    })
    .catch((err) => handleError(err, dispatch));
};