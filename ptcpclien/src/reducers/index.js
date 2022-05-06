import { combineReducers } from "redux";
import schoolReducer from './schoolsReducer'

export default  combineReducers ({
    schools : schoolReducer
})