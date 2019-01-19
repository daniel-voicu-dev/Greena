import { combineReducers } from "redux";

import user from "./paragraphReducer";
import event from "./productsReducer";

export default combineReducers({event,user, order})