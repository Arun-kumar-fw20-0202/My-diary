import axios from "axios";
import { ERROR, REGISTER_SUCCESS, REQUEST } from "./register.actionType";

export const request = () => {
  return { type: REQUEST };
};
export const error = () => {
  return { type: ERROR };
};

export const register_success = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};

export const handle_register = (userData) => (dispatch) => {
  dispatch(request());
  axios
    .post("http://localhost:8080/users", userData)
    .then((res) => {
      dispatch(register_success());
    })
    .catch((err) => {
      dispatch(error());
    });
};
