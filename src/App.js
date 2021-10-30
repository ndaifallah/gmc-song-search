import React, { Component } from "react";
import "antd/dist/antd.css";
import Result from "./components/result";
import Search from "./components/search";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			cartData: [],
			oldPrices: [0],
			count: [],
		};
	}

	dataCallback = (d) => {
		this.setState({
			data: d.results,
		});
	};
	addToCart = (name, price, artist) => {
		this.setState({
			cartData: [
				...this.state.cartData,
				{ name: name, price: price, artist: artist },
			],
		});
		this.setState({ oldPrices: [...this.state.oldPrices, price] });

		this.setState({ count: this.state.oldPrices.reduce((a, b) => a + b) });

		console.log("shieet", this.state.count);
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/checkout">
						<h1>hello World</h1>
					</Route>
					<Route path="/">
						<div
							className="App"
							style={{
								textAlign: "center",
							}}
						>
							<Search callbackFetch={this.dataCallback} />
							<Result addToCart={this.addToCart} data={this.state.data} />
							<Cart data={this.state.cartData} count={this.state.count} />
						</div>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
