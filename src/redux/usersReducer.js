import { USER_ERROR, USER_START, USER_SUCCESS } from "./action";

const initialState = {
	data: [],
	loading: false,
	err: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_START:
			return {
				data: [],
				loading: true,
				err: null,
			};
		case USER_SUCCESS:
			return {
				data: action.payload,
				loading: false,
				err: null,
			};
		case USER_ERROR:
			return {
				data: [],
				loading: false,
				err: action.payload,
			};
		default:
			return state;
	}
};

export default usersReducer;
