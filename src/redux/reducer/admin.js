import { UPDATEUSER, SETFINDIDDATA, SETALERTDIMISS, SETUSERADMIN, SETUSERADMINERROR, SETADMINTRANSACTION, ADDADMINTRANSACTION } from "../constant";

const initState = {
  updateUser: [],
  UserAdd: [],
  history: []
};

const adminReducer = (state = initState, action) => {
  const { type, payload } = action;


  switch (type) {
    case SETADMINTRANSACTION:
      return {
        ...state,
        history: payload
      }

    case ADDADMINTRANSACTION:
      return {
        ...state,
        history: [...state.history, ...payload]
      }

    case SETFINDIDDATA:
      return {
        ...state,
        findId: payload,
      };
    case UPDATEUSER:
      return {
        ...state,
        updateUser: payload,
      };
    case SETALERTDIMISS:
      return {
        ...state,
        updateUser: "",
      };

    case SETUSERADMIN:
      return {
        ...state,
        UserAdd: payload
      }

    case SETUSERADMINERROR:
      return {
        ...state,
        error: payload
      }

    default:
      return state;
  }
};

export default adminReducer;
