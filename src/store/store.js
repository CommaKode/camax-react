import { configureStore } from "@reduxjs/toolkit";
import comeUpReducer from './Reducers/comeUpReducer';


const store = configureStore({
  reducer: { comeUp: comeUpReducer },
});

export default store;
