import { ERROR, REGISTER_SUCCESS, REQUEST } from "./register.actionType";

const initialState = {
  isLoading: false,
  isError: false,
};

export const RegisterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: (state.isLoading = true) };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: (state.isLoading = false),
      };
    case ERROR:
      return {
        ...state,
        isLoading: (state.isLoading = false),
        isError: (state.isError = true),
      };

    default:
      return state;
  }
};
