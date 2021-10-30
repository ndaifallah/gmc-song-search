import React, { Component } from "react";
import { Divider, Button } from "antd";

export default class Cart extends Component {
	render() {
		let shesh = this.props.data;

		shesh.filter((item, index) => shesh.indexOf(item) === index);

		shesh.reduce(
			(unique, item) => (unique.includes(item) ? unique : [...unique, item]),
			[]
		);
		return (
			<div
				style={{
					width: "300px",
					height: "600px",
					position: "fixed",
					right: 0,
					top: 0,
					backgroundColor: "white",
					border: "1px lightgrey solid",
					overflowY: "scroll",
				}}
			>
				{shesh.map((el, index) => {
					return (
						<div key={index}>
							<h3>{el.name}</h3>
							<h5>{el.artist}</h5>
							<p>{el.price}</p>
							<Divider />
						</div>
					);
				})}
				<a>{this.props.count}</a>
				<Button>Checkout</Button>
			</div>
		);
	}
}
