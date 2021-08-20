import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from './Reducers/popUpReducer';
import filterReducer from './Reducers/filterReducer';


const store = configureStore({
  reducer: { popUp: popUpReducer ,filter: filterReducer },
});

export default store;
