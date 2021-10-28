import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import { combineReducers } from "redux";
export default combineReducers({
  user: userReducer,
  products: productReducer,
});