import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  api, getNotAuthInstance } from "./api";
import Home from "./components/Home";
import Product from "./components/Product";

const App = () => {

	return (
		
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/product/:id"  component={Product} />
			</Switch>
		</Router>
	);
};

export default App;

// <div className="App">
// 	<h1>{count}</h1>
// 	<button
// 		onClick={() => {
// 			dispatch({
// 				type: DECREMENT,
// 			});
// 		}}
// 	>
// 		DECREMENT
// 	</button>
// 	<button
// 		onClick={() => {
// 			dispatch({
// 				type: INCREMENT,
// 			});
// 		}}
// 	>
// 		INCREMENT
// 	</button>
//   <button
// 		onClick={() => {
// 			dispatch({
// 				type: INCREMENT,
// 			});
// 		}}
// 	>
// 		INCREMENT
// 	</button>
//   <button
// 		onClick={() => {
// 			dispatch({
// 				type: INCREMENT,
// 			});
// 		}}
// 	>
// 		INCREMENT
// 	</button>
// 	<button
// 		onClick={() => {
// 			dispatch({
// 				type: CLEAR,
// 			});
// 		}}
// 	>
// 		Clear
// 	</button>
// 	<br />
// 	<input
// 		value={add}
// 		onChange={(_) => {
// 			setAdd(_.target.value);
// 		}}
// 		type="number"
// 	/>
// 	<button
// 		onClick={() => {
// 			dispatch({
// 				type: ADD,
// 				payload: add,
// 			});
//       setAdd("")
// 		}}
// 	>
// 		Add
// 	</button>
// </div>
