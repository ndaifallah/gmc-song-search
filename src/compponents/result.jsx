import React, { Component } from "react";
import SingleResult from "./singleResult";

class Result extends Component {
	render() {
		let datos = this.props.data;

		if (datos !== undefined) {
			return (
				<div style={{ width: "100%" }}>
					{datos.map((el, index) => {
						return (
							<div
								key={index}
								style={{ display: "flex", flexDirection: "column" }}
							>
								<SingleResult
									name={el.trackName}
									artist={el.artistName}
									thumbnail={el.artworkUrl100}
									audio={el.previewUrl}
								/>
							</div>
						);
					})}
				</div>
			);
		}
	}
}

export default Result;
