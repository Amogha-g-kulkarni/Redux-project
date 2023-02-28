import { combineReducers } from "redux";
import AccountReducer from "./reducer/AccountReducer";

const reducers=combineReducers({
    account:AccountReducer
})
export default reducers