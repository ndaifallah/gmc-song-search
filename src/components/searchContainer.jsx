import React, { Component } from "react";
import "antd/dist/antd.css";

import Search from "./search";
import Result from "./result";
import Cart from "./cart";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      songs_added: [],
      panier: [],
    };
  }

  dataCallback = (d) => {
    this.setState({
      data: d.results,
    });
  };
  addToCart0 = (name, artist, price) => {
    this.setState({
      songs_added: [
        ...this.state.songs_added,
        { name: name, artist: artist, price: price },
      ],
    });
  };
  render() {
    console.log(this.props);
    return (
      <div
        className="App"
        style={{
          textAlign: "center",
        }}
      >
        <Search callbackFetch={this.dataCallback} />
        <br />
        <br />
        <br />
        <br />

        <Result data={this.state.data} getSong={this.addToCart0} />
        <Cart panier={this.state.songs_added} history={this.props.history} />
      </div>
    );
  }
}

export default SearchContainer;
