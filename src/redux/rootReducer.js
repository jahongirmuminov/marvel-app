import { combineReducers } from "redux";
import counterReducer from './counterReducer'
import productReducer from "./productReducer";
import usersReducer from "./usersReducer";

const  rootReducer=combineReducers({
	count:counterReducer,
	products:productReducer,
	users: usersReducer
})
export default rootReducer




















