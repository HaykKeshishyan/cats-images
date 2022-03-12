import {combineReducers} from "redux";
import {catDuck} from "./ducks/catDuck";

export const rootReducer = combineReducers({
    catDuck
});