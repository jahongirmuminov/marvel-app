import { USER_ERROR, USER_START, USER_SUCCESS } from "./action";
import { api } from "../api";
import { apikey, hash,ts } from '../contstant/constant'

export const getUsers = (props) => {
	  
 
		if(props.text===""){
			return (dispatch) => {
				dispatch({
					type: USER_START,
				});
				
				api()
					.get("characters",{
						params:{
							apikey,
							hash,
							ts
						}
					})
					.then((res) => {
						dispatch({
							type: USER_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						dispatch({
							type: USER_ERROR,
							payload: err.toString(),
						});
					});
			};
		}else {
			return (dispatch) => {
				dispatch({
					type: USER_START,
				});
				
				api()
					.get(`characters?nameStartsWith=${props.text}`,{
						params:{
							apikey,
							hash,
							ts
						}
					})
					.then((res) => {
						dispatch({
							type: USER_SUCCESS,
							payload: res.data,
						});
					})
					.catch((err) => {
						dispatch({
							type: USER_ERROR,
							payload: err.toString(),
						});
					});
			};
		}

	
};

export const getOneItems = ({id}) => {
	return (dispatch) => {
		dispatch({
			type: USER_START,
		});

		api()
			.get(`characters/${id}`,{
				params:{
					apikey,
					hash,
					ts
				}
			})
			.then((res) => {
				dispatch({
					type: USER_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: USER_ERROR,
					payload: err.toString(),
				});
			});
	};
};
 