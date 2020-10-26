import axios from '../../helpers/axios'
import {
  SETAUTH,
  SETAUTHLOGOUT,
  SETAUTHERROR,
  options
} from '../constant'

export const AuthLogin = (data, history) => (dispatch) => {
  axios.post("/auth/login", data)
    .then(res => {
      dispatch(options(SETAUTH, res.data.data))
      dispatch(options(SETAUTHERROR, ""))
      if (res.data.data.role !== 'admin') return history.push("/dashboard")

      return history.push("/admin")
    })
    .catch(err => {
      if (!err.response) return dispatch(options(SETAUTHERROR, "Network Error"))

      dispatch(options(SETAUTHERROR, err.response.data.message))
    })
}

export const AuthRegister = (data, history, mobile = false) => (dispatch) => {
  // const isMobile = mobile ? "/m/auth/create-pin" : ""
  axios.post("/auth/register", data)
    .then(res => {
      dispatch(options(SETAUTH, res.data.data))
      dispatch(options(SETAUTHERROR, ""))

      // setTimeout(() => history.replace(`${isMobile}/auth/create-pin`), 200)
    })
    .catch(err => {
      if (!err.response) return dispatch(options(SETAUTHERROR, "Network Error"))

      dispatch(options(SETAUTHERROR, err.response.data.message))
    })
}

export const AuthLogout = (history) => (dispatch) => {
  dispatch(options(SETAUTHLOGOUT))
  return history.push("/")
}