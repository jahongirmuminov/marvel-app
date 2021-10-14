import { ADD, INCREMENT } from "./action";

const initialState = {
	count: 0,
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1,
			};
		case ADD:
			return {
				count: state.count + Number(action.payload),
			};

		default:
			return state;
	}
};

export default counterReducer;
