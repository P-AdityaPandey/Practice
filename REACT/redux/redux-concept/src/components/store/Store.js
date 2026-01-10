import myReducer from "../reducer/myReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
let myReduxStore= createStore(myReducer,applyMiddleware(logger));
export default myReduxStore;