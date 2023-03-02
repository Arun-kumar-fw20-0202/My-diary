import axios from "axios";
import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./user.actionType";

export const user_fetch_request = () => {
  return { type: FETCH_USER_REQUEST };
};

export const user_fetch_error = () => {
  return { type: FETCH_USER_ERROR };
};

export const fetch_user_success = (payload) => {
  return { type: FETCH_USER_SUCCESS, payload };
};

//
export const handle_fetch_user = (dispatch) => {
  dispatch(user_fetch_request());
  axios
    .get("http://localhost:8080/users")
    .then((res) => {
      dispatch(fetch_user_success(res.data));
    })
    .catch((err) => {
      dispatch(user_fetch_error());
    });
};
