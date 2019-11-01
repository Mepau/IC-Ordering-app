import axios from "axios";
import { GET_ORDERPACKS, ADD_ORDERPACK, DELETE_ORDERPACK, ORDERPACKS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getOrderpacks = () => dispatch => {
  dispatch(setOrderpacksLoading());
  //use proxy and retrive all items[]

  axios
    .get("/API/orderpacks")
    .then(res => dispatch({ type: GET_ORDERPACKS, payload: res.data }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addOrderpack = orderpack => (dispatch, getState) => {
  axios
    .post("/API/orderpacks", orderpack, tokenConfig(getState))
    .then(res => dispatch({ type: ADD_ORDERPACK, payload: res.data }))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteOrderpack = id => (dispatch, getState) => {
  axios
    .delete(`/API/orderpacks/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ORDERPACK,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setOrderpacksLoading = () => {
  return {
    type: ORDERPACKS_LOADING
  };
};
