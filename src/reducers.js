// reducers.js
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer
  // Add more reducers as needed
});

export default rootReducer;
