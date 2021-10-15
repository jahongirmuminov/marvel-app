import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

