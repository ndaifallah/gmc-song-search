import React, { Component } from "react";
import SingleResult from "./singleResult";
import { Button } from "antd";

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 10,
		};
	}

	addToCart2 = (name, price, artist) => {
		this.props.addToCart(name, price, artist);
	};

	render() {
		return (
			<div>
				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						margin: "2rem",
					}}
				>
					{this.props.data.map((el, index) =>
						index < this.state.count ? (
							<SingleResult
								artistName={el.artistName}
								trackName={el.trackName}
								pic={el.artworkUrl100}
								price={el.trackPrice}
								addToCart={this.addToCart2}
							/>
						) : (
							<></>
						)
					)}
				</div>
				{this.props.data.length > 0 ? (
					<Button
						type="link"
						onClick={(e) => this.setState({ count: this.state.count + 10 })}
					>
						Afficher plus de résultats
					</Button>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default Result;
