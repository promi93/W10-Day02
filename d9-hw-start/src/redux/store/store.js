import { configureStore } from "redux";
import mainReducer from "./reducer";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
