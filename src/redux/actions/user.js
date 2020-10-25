import axios from '../../helpers/axios'
import {
  options,
  SETUSERDATA,
  SETAUTHLOGOUT,
  SETHISTORYDATA,
  SETUSERERROR,
  ADDHISTORYDATA,
  SETTOPUPDATA,
  ADDFINDUSERDATA,
  SETFINDUSERDATA,
  SETAUTHERROR,
  SETFINDIDDATA,
  SETHISTORYIDDATA,
  SETBALANCE,
  SETPHOTO,
  SETPHONE
} from '../constant'

const handleError = (err, dispatch) => {
  if (!err.response) return dispatch(options(SETUSERERROR, "Network Error"))
  dispatch(options(SETUSERERROR, err.response.data.message))
}

export const UserLoad = (token, history, mobile = false) => dispatch => {
  const isMobile = mobile ? "/m" : ""

  axios.get("/users/detail", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.data.data.phone) history.push(`${isMobile}/dashboard/profile/add_phone`)
      return dispatch(options(SETUSERDATA, res.data.data))
    })
    .catch(_ => {
      dispatch(options(SETAUTHERROR, "Sesi telah berakhir"))
      dispatch(options(SETAUTHLOGOUT))
      return history.push("/auth")
    })
}

export const getHistories = (token, offset = 1, reset = true) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.get(`/users/histories?offset=${offset}&limit=4`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (reset) return dispatch(options(SETHISTORYDATA, res.data.data))
      return dispatch(options(ADDHISTORYDATA, res.data.data))
    })
    .catch(err => handleError(err, dispatch))
}

export const resetHistories = () => dispatch => dispatch(options(SETHISTORYDATA, []))
export const resetFindUsers = () => dispatch => dispatch(options(SETFINDUSERDATA, []))

export const getHistoryId = (token, id, history) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.get(`/users/history/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => dispatch(options(SETHISTORYIDDATA, res.data.data)))
    .catch(err => history.replace("/dashboard"))
}

export const getFindUsers = (token, offset = 1, name = null, reset = true) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.get(`/users/search?q=${name}&offset=${offset}&limit=4`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (reset) return dispatch(options(SETFINDUSERDATA, res.data.data))
      return dispatch(options(ADDFINDUSERDATA, res.data.data))
    })
    .catch(err => handleError(err, dispatch))
}

export const setPhoto = (token, data) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.post(`/users/photo`, data, {
    headers: {
      'content-type': "multipart/form-data",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => dispatch(options(SETPHOTO, res.data.data.photo)))
    .catch(err => handleError(err, dispatch))
}

export const getFindId = (token, id) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(res => dispatch(options(SETFINDIDDATA, res.data.data)))
    .catch(err => handleError(err, dispatch))
}

export const balanceTransfer = (token, data, history, mobile = false) => dispatch => {
  dispatch(options(SETUSERERROR, ""))
  const isMobile = mobile ? "/m" : ""

  axios.post("/users/transfer", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      const amount = data.total
      dispatch(options(SETBALANCE, amount))
      history.push(`${isMobile}/dashboard/transfer/status/${res.data.data.id}`)
    })
    .catch(err => handleError(err, dispatch))
}

export const deletePhone = (token, history) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.delete("/users/phone", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(options(SETPHONE, null))
      history.push(`/dashboard/profile/add_phone`)
    })
    .catch(err => handleError(err, dispatch))
}

export const addPhone = (token, phone, history) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.patch("/users/phone", { phone }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(options(SETPHONE, phone))
      history.push(`/dashboard/profile/info`)
    })
    .catch(err => handleError(err, dispatch))
}

export const addPhoneMobile = (token, phone, history) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.patch("/users/phone", { phone }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      dispatch(options(SETPHONE, phone))
      history.push(`/m/dashboard/profile/info`)
    })
    .catch(err => handleError(err, dispatch))
}

export const changePassword = (token, data, history) => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.patch("/users/password", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => history.push(`/dashboard/profile`))
    .catch(err => handleError(err, dispatch))
}

export const createPin = (token, pin, history, route = "") => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.patch("/users/create_pin", { pin }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => history.push(route ? route : `/dashboard/profile`))
    .catch(err => handleError(err, dispatch))
}


export const getTopup = () => dispatch => {
  dispatch(options(SETUSERERROR, ""))

  axios.get("/topup")
    .then(res => dispatch(options(SETTOPUPDATA, res.data.data)))
    .catch(err => {
      if (!err.response) return dispatch(options(SETUSERERROR, "Network Error"))
      dispatch(options(SETUSERERROR, err.response.data.message))
    })
}
