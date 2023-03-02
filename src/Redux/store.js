import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { RegisterReducer } from "./Register/register.reducer";
import { UsersReducer } from "./Users/user.reducer";

const rootReducer = combineReducers({ RegisterReducer, UsersReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
