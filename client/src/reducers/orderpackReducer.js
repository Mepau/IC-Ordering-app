import {
  GET_ORDERPACKS,
  ADD_ORDERPACK,
  DELETE_ORDERPACK,
  ORDERPACKS_LOADING
} from "../actions/types";

const initialState = {
  orderpacks: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERPACKS:
      return {
        ...state,
        orderpacks: action.payload,
        loading: false
      };
    case DELETE_ORDERPACK:
      return {
        ...state,
        orderpacks: state.orderpacks.filter(
          orderpack => orderpack._id !== action.payload
        )
      };
    case ADD_ORDERPACK:
      return {
        ...state,
        orderpacks: [action.payload, ...state.orderpacks]
      };
    case ORDERPACKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
