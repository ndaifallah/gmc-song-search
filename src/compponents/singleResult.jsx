import React, { Component } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

class SingleResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonstate: false,
		};
	}
	render() {
		let previewAudio = `${this.props.audio}`;
		return (
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						overflow: "hidden",
						maxHeight: "10rem",
						margin: "1rem",
						border: "1px lightgray solid",
						width: 650,
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							overflow: "hidden",
							maxHeight: "10rem",
						}}
					>
						<div
							className="pic"
							style={{
								width: "7rem",
								height: "7rem",
								margin: "1rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "lightgray",
							}}
						>
							<img src={this.props.thumbnail} alt="thumbnail"></img>
						</div>
						<div className="content" style={{ marginLeft: "1rem" }}>
							<h3>{this.props.name}</h3>
							<p>{this.props.artist}</p>
						</div>
					</div>

					<div className="audio">
						{this.state.buttonstate === true ? (
							<audio
								src={previewAudio}
								controls
								style={{ margin: "1rem", outline: "none" }}
							/>
						) : (
							<div></div>
						)}
					</div>
				</div>
				<Button
					icon={
						!this.state.buttonstate ? (
							<RightCircleOutlined />
						) : (
							<LeftCircleOutlined />
						)
					}
					size="large"
					style={{ margin: "1rem" }}
					onClick={() => {
						this.state.buttonstate
							? this.setState({ buttonstate: false })
							: this.setState({ buttonstate: true });
					}}
				>
					{!this.state.buttonstate ? "Open" : "Close"}
				</Button>
			</div>
		);
	}
}

export default SingleResult;
