import { configureStore } from "@reduxjs/toolkit";
import comeUpReducer from './Reducers/comeUpReducer';
import filterReducer from './Reducers/filterReducer';


const store = configureStore({
  reducer: { comeUp: comeUpReducer, filters: filterReducer },
});

export default store;
