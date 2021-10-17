import React, { Component } from "react";
import { Input, Button } from "antd";
import { AppleFilled } from "@ant-design/icons";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			data: "",
		};
	}
	render() {
		return (
			<div>
				<h1>My songs</h1>
				<Input
					size="large"
					type="text"
					placeholder="Hello Apple"
					prefix={<AppleFilled />}
					style={{ width: 400 }}
					value={this.state.search}
					onChange={(evt) => this.setState({ search: evt.target.value })}
				></Input>
				<Button
					type="primary"
					shape="round"
					icon={<AppleFilled />}
					size="large"
					style={{ margin: 10 }}
					onClick={async () => {
						this.props.loadingstate(true);
						let serverCall = await fetch(
							`https://itunes.apple.com/search?term=${this.state.search}`
						);
						let response = await serverCall.json();
						this.props.loadingstate(false);
						console.log(response.results);
						this.props.callbackFetch(response.results);
					}}
				>
					Search
				</Button>
			</div>
		);
	}
}

export default Search;
