import {
  SETUSERDATA,
  SETBALANCE,
  SETHISTORYDATA,
  ADDHISTORYDATA,
  SETUSERERROR,
  SETTOPUPDATA,
  SETFINDUSERDATA,
  ADDFINDUSERDATA,
  SETFINDIDDATA,
  SETHISTORYIDDATA,
  SETPHOTO,
  SETPHONE,
} from '../constant'

const initState = {
  error: "",
  userdata: {},
  history: [],
  historyId: {},
  findUser: [],
  topup: [],
  findId: {}
}

const authReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case SETUSERDATA:
      return {
        ...state,
        userdata: payload
      }

    case SETBALANCE:
      return {
        ...state,
        userdata: {
          ...state.userdata,
          balance: state.userdata.balance - payload
        }
      }

    case SETPHOTO:
      return {
        ...state,
        userdata: {
          ...state.userdata,
          photo: payload
        }
      }

    case SETPHONE:
      return {
        ...state,
        userdata: {
          ...state.userdata,
          phone: payload
        }
      }


    case SETHISTORYDATA:
      return {
        ...state,
        history: payload
      }

    case ADDHISTORYDATA:
      return {
        ...state,
        history: [...state.history, ...payload]
      }

    case SETTOPUPDATA:
      return {
        ...state,
        topup: payload
      }

    case SETUSERERROR:
      return {
        ...state,
        error: payload
      }

    case SETFINDUSERDATA:
      return {
        ...state,
        findUser: payload
      }

    case ADDFINDUSERDATA:
      return {
        ...state,
        findUser: [...state.findUser, ...payload]
      }

    case SETFINDIDDATA:
      return {
        ...state,
        findId: payload
      }

    case SETHISTORYIDDATA:
      return {
        ...state,
        historyId: payload
      }
    default:
      return state
  }
}

export default authReducer