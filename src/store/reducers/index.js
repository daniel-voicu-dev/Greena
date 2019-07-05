import { combineReducers } from "redux";

import paragraphs from "./paragraphsReducer";
import products from "./productsReducer";
import config from "./configReducers";

export default combineReducers({paragraphs, products, config});