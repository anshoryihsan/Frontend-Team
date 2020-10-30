import { UPDATEUSER, SETFINDIDDATA, SETALERTDIMISS } from "../constant";

const initState = {
  updateUser: [],
};

const adminReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
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
    default:
      return state;
  }
};

export default adminReducer;
