import { configureStore } from "@reduxjs/toolkit";
import comeUpReducer from './Reducers/comeUpReducer';


const store = configureStore({
  reducer: { popUp: comeUpReducer },
});

export default store;
