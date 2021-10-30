import React, { Component } from "react";
import { Card } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";

class SingleResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card: [],
			oldPrices: 0,
		};
	}

	render() {
		const { Meta } = Card;
		return (
			<div>
				<Card
					hoverable
					style={{ width: 200, margin: 10 }}
					cover={
						<img
							style={{ padding: 3, border: "lightgray solid 1px" }}
							alt="example"
							src={this.props.pic}
						/>
					}
					actions={[
						<AppstoreAddOutlined
							onClick={() => {
								this.props.addToCart(
									this.props.trackName,
									this.props.price,
									this.props.artistName
								);
							}}
						/>,
					]}
				>
					<Meta
						title={this.props.trackName}
						description={this.props.artistName}
					/>
				</Card>
			</div>
		);
	}
}

export default SingleResult;
