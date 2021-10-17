import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Search from "./compponents/search";
import Result from "./compponents/result";
import { Spin } from "antd";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: false,
		};
	}

	dataCallback = (d) => {
		this.setState({ data: d });
	};

	loadingChangeState = (pit) => {
		this.setState({ loading: pit });
	};

	render() {
		return (
			<div
				className="App"
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Search
					callbackFetch={this.dataCallback}
					data={this.state.data}
					load={this.state.loading}
					loadingstate={this.loadingChangeState}
				/>
				{this.state.loading ? (
					<Spin />
				) : (
					<Result data={this.state.data} load={this.state.loading} />
				)}
			</div>
		);
	}
}

export default App;
