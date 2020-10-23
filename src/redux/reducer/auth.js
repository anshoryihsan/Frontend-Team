import {
  SETAUTH,
  SETAUTHERROR,
  SETAUTHLOGOUT
} from '../constant'

const initState = {
  token: "",
  role: "",
  error: ""
}


const authReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case SETAUTH:
      const { token, role } = payload
      return { ...state, token, role }

    case SETAUTHERROR:
      return { ...state, error: payload }

    case SETAUTHLOGOUT:
      return { ...state, token: "", role: "" }

    default:
      return state
  }
}

export default authReducer