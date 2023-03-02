import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./user.actionType";

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        users: (state.users = payload),
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    default:
      return state;
  }
};
