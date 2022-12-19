import { combineReducers } from "redux"
import authReducer from "./authReducer.js"
import articleReducer from "./articleReducer.js"

export const reducers = combineReducers({ authReducer, articleReducer })