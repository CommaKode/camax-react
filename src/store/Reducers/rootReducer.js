import { combineReducers } from "redux";
import comeUpReducer from "./comeUpReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  comeUp: comeUpReducer,
  filters: filterReducer,
});

export default rootReducer;
