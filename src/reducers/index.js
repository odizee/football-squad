import { combineReducers } from "redux";
import footballReducer from "./footballReducer";
import topscorerReducer from "./topscorerReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
    football: footballReducer,
    topscorer: topscorerReducer,
    detail: detailReducer,
});

export default rootReducer;