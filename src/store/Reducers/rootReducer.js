import { combineReducers } from "redux";
import comeUpReducer from "./comeUpReducer";

const rootReducer = combineReducers({
  comeUp: comeUpReducer,
});

export default rootReducer;
