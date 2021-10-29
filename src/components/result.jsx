import React, { Component } from "react";

import Singleresult from "./singleresult";
import { Button } from "antd";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  addToCart = (trackName, artistName, price) => {
    this.props.getSong(trackName, artistName, price);
    console.log(artistName);
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "2rem",
          }}
        >
          {this.props.data.map((el, idx) =>
            idx < this.state.count ? (
              <Singleresult
                pic={el.artworkUrl100}
                trackName={el.trackName}
                artistName={el.artistName}
                price={el.trackPrice}
                addsong={this.addToCart}
              />
            ) : (
              <></>
            )
          )}
        </div>
        <Button
          type="link"
          style={{ marginBottom: 50 }}
          onClick={(e) => this.setState({ count: this.state.count + 6 })}
        >
          Afficher plus de résultats
        </Button>
      </div>
    );
  }
}

export default Result;
