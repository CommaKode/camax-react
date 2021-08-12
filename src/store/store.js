import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from './Reducers/popUpReducer';


const store = configureStore({
  reducer: { popUp: popUpReducer },
});

export default store;
