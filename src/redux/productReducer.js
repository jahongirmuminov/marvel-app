import { ADD_PRODUCT, CLEAR } from "./action";

const initialState = {
	products: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				products: [action.item],
			};
		case CLEAR:
			return{
				products:[]
			}
		default:
			return state;
	}
};

export default productReducer;
