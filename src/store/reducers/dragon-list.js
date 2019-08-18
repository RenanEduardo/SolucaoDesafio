import * as actionTypes from "../actions/actionTypes";

const initialState = {
  dragons: [],
  error: null
};

const getDragonsList = (state, action) => {
  return {
    dragons: state.dragonsList,
    loading: true
  }
};

const getDragonsListSuccess = (state, action) => {
  return {
    list: state.dragonsList,
    loading: false
  }
};
const getDragonsListFail = (state, action) => {
  return {
    error: state.error,
    loading: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DRAGONS_LIST:
      return getDragonsList(state, action);
    case actionTypes.GET_DRAGONS_LIST_FAIL:
      return getDragonsListFail(state, action);
    case actionTypes.GET_DRAGONS_LIST_SUCCESS:
      return getDragonsListSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
